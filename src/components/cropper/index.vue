<template>
    <ElDialog
        v-if="dialog"
        v-model="dialogVisible"
        title="图片裁剪"
        :width="dialogWidth"
        custom-class="or-dialog"
        append-to-body
        :close-on-click-modal="false"
        :before-close="handleCancle"
    >
        <div ref="workbench" v-loading="loading" :class="$style.workbench" :style="containerStyle" />
        <template #footer>
            <ElSpace>
                <ElButton :loading="loading" @click="handleCancle">取消</ElButton>
                <ElLink :href="downloadLink" download="cropper.jpg" :underline="false">
                    <ElButton type="primary">下载切片</ElButton>
                </ElLink>
                <ElButton :loading="loading" type="primary" @click="handleFinish">确定</ElButton>
            </ElSpace>
        </template>
    </ElDialog>
    <div v-else ref="workbench" v-loading="loading" :class="$style.workbench" :style="containerStyle" />
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'
import { ElButton, ElDialog, ElLink, ElSpace, vLoading } from 'element-plus'
import { defaultWindow, file, loader } from '@wfrog/utils'
import { debounce } from 'lodash-es'
import type { PropType } from 'vue'
import type ICropper from 'cropperjs'

const props = defineProps({
    dialog: { type: Boolean, default: false },
    visible: { type: Boolean, default: false },
    image: { type: [HTMLImageElement, String, File], required: true },

    option: { type: Object as PropType<ICropper.Options>, default: () => {} },

    // 图片质量
    imageSmoothingQuality: { type: String as PropType<ICropper.ImageSmoothingQuality>, default: 'high' },

    // 裁剪容器大小
    containerWidth: { type: String, default: '600px' },
    containerHeight: { type: String, default: '450px' },

    // 裁剪框大小
    cropperWidth: { type: Number, default: 400 },
    cropperHeight: { type: Number, default: 300 },
})

const emits = defineEmits(['init', 'update:visible', 'cancel', 'finished'])

const loading = ref(false)
const workbench = ref<HTMLDivElement>()
const cropperRef = shallowRef<ICropper>()
const downloadLink = ref('')

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

const dialogWidth = computed(() => `${parseInt(props.containerWidth) + 40}px`)

const image = computed(() => {
    // 链接类型
    if (typeof props.image === 'string') {
        const img = new Image()
        img.src = props.image
        return img
    }

    // 假设File类型
    const file = props.image as File
    if (defaultWindow && file?.size) {
        const img = new Image()
        const blob = defaultWindow.URL.createObjectURL(file)
        img.src = blob
        return img
    }

    // dom节点
    return props.image as HTMLImageElement
})

const handleDownload = () => {
    if (!cropperRef.value || !props.dialog) { return }
    const canvas = cropperRef.value.getCroppedCanvas()
    downloadLink.value = canvas?.toDataURL() || ''
}

const init = async () => {
    if (!workbench.value) { return }

    cropperRef.value?.destroy()
    loading.value = true
    workbench.value.childNodes.forEach(item => workbench.value?.removeChild(item))
    workbench.value.appendChild(image.value)
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

const handleCancle = () => {
    if (loading.value) { return }
    dialogVisible.value = false
    emits('cancel')
}

const getCroppedCanvas = () => {
    if (loading.value || !cropperRef.value) { return }

    return cropperRef.value.getCroppedCanvas({
        width: props.cropperWidth,
        height: props.cropperHeight,
        imageSmoothingQuality: props.imageSmoothingQuality,
    })
}

const getBlobData = () => {
    const canvas = getCroppedCanvas()

    if (!canvas) { return undefined }
    return file.canvasToBlob(canvas)
}

const handleFinish = () => {
    const canvas = getCroppedCanvas()
    const blob = getBlobData()
    dialogVisible.value = false
    emits('finished', canvas, blob)
}

watch(props.option, () => init())
watch(image, () => nextTick(() => init()))
watch(dialogVisible, () => {
    props.visible && !cropperRef.value && nextTick(() => init())
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
