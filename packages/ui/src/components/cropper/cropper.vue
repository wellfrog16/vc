<template>
    <VcDialog
        v-if="dialog"
        v-model="dialogVisible"
        title="图片裁剪"
        :width="dialogWidth"
        append-to-body
        :close-on-click-modal="false"
        :before-close="handleCancle"
        :show-fullscreen="false"
        :lazy="false"
    >
        <div ref="workbenchRef" v-loading="loading" :class="$style.workbench" :style="containerStyle" />
        <template #footer>
            <ElSpace>
                <ElButton :loading="loading" @click="handleCancle">取消</ElButton>
                <ElLink :href="downloadLink" download="cropper.jpg" :underline="false">
                    <ElButton type="primary">下载切片</ElButton>
                </ElLink>
                <ElButton :loading="loading" type="primary" @click="handleFinish">确定</ElButton>
            </ElSpace>
        </template>
    </VcDialog>
    <div v-else ref="workbenchRef" v-loading="loading" :class="$style.workbench" :style="containerStyle" />
</template>

<script lang="ts" setup>
import type ICropper from 'cropperjs'
import type { ICropperProps } from './cropper'
import { file, loader } from '@wfrog/vc-utils'
import { debounce } from 'lodash-es'
import VcDialog from '../dialog/dialog.vue'

const props = withDefaults(defineProps<ICropperProps>(), {
    dialog: false,
    visible: false,
    image: undefined,
    option: () => ({}),
    imageSmoothingQuality: 'high',
    containerWidth: '600px',
    containerHeight: '450px',
    cropperWidth: 400,
    cropperHeight: 300,
})

const emits = defineEmits<{
    (e: 'init'): void
    (e: 'update:visible', value: boolean): void
    (e: 'cancel'): void
    (e: 'finished', canvas: HTMLCanvasElement, blob: Blob): void
}>()

const loading = ref(false)
const workbenchRef = useTemplateRef('workbenchRef')
const cropperRef = shallowRef<ICropper>()
const downloadLink = ref('')
const isNeedInit = ref(false) // 是否需要重新初始化

const dialogVisible = computed({
    get: () => props.visible,
    set: val => {
        emits('update:visible', val)
    },
})

const containerStyle = computed(() => ({
    width: props.containerWidth,
    height: props.containerHeight,
}))

const dialogWidth = computed(() => `${Number.parseInt(props.containerWidth) + 40}px`)

const image = computed(() => {
    // 链接类型
    if (typeof props.image === 'string') {
        const img = new Image()
        img.src = props.image
        return img
    }

    // 假设File类型
    const file = props.image as File
    if (file?.size) {
        const img = new Image()
        const blob = window.URL.createObjectURL(file)
        img.src = blob
        return img
    }

    // dom节点
    return props.image as HTMLImageElement
})

function handleDownload() {
    if (!cropperRef.value || !props.dialog) { return }
    const canvas = cropperRef.value.getCroppedCanvas()
    downloadLink.value = canvas?.toDataURL() || ''
}

async function init() {
    if (!workbenchRef.value) { return }

    cropperRef.value?.destroy()
    loading.value = true
    isNeedInit.value = false
    workbenchRef.value.childNodes.forEach(item => workbenchRef.value?.removeChild(item))
    workbenchRef.value.appendChild(image.value)
    const Cropper = await loader.loadCdnSingle('cropper')

    cropperRef.value = new Cropper(image.value, {
        dragMode: 'move',
        viewMode: 1,
        aspectRatio: props.cropperWidth / props.cropperHeight,
        // cropBoxResizable: true, // 是否可以改变crop框大小
        toggleDragModeOnDblclick: false, // 双击切换拖动模式
        guides: true, // 网格
        // minContainerHeight: props.containerHeight,
        cropmove: props.dialog ? debounce(handleDownload, 1000) : () => {},
        ...props.option,
        ready() {
            loading.value = false
            handleDownload()
            nextTick(() => emits('init'))
        },
    })
}

function handleCancle() {
    if (loading.value) { return }
    dialogVisible.value = false
    emits('cancel')
}

function getCroppedCanvas() {
    if (loading.value || !cropperRef.value) { return }

    return cropperRef.value.getCroppedCanvas({
        width: props.cropperWidth,
        height: props.cropperHeight,
        imageSmoothingQuality: props.imageSmoothingQuality,
    })
}

function getBlobData() {
    const canvas = getCroppedCanvas()

    if (!canvas) { return undefined }
    return file.canvasToBlob(canvas)
}

function handleFinish() {
    const canvas = getCroppedCanvas()
    const blob = getBlobData()
    dialogVisible.value = false
    emits('finished', canvas!, blob!)
}

watch(() => props.option, () => { isNeedInit.value = true })
watch(image, () => { isNeedInit.value = true })
watch(dialogVisible, () => {
    props.visible && (!cropperRef.value || isNeedInit.value) && nextTick(() => init())
})

defineExpose({ instance: cropperRef, getCroppedCanvas, getBlobData })
onMounted(() => (!props.dialog && init()))
onUnmounted(() => cropperRef.value?.destroy())
</script>

<style lang="scss" module>
.workbench {
    overflow: hidden;
}
</style>
