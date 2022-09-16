<template>
    <div ref="workbench" v-loading="loading" :class="$style.workbench" :style="containerStyle" />
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'
import { vLoading } from 'element-plus'
import { defaultWindow, loader } from '@frog-res/h-utils'
import { reject } from 'lodash'
import { resolve } from 'dns'
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
    containerWdith: { type: Number, default: 600 },
    containerHeight: { type: Number, default: 450 },

    // 裁剪框大小
    cropperWidth: { type: Number, default: 400 },
    cropperHeight: { type: Number, default: 300 },
})

const emits = defineEmits(['init'])

const loading = ref(false)
const workbench = ref<HTMLDivElement>()
const cropper = shallowRef<ICropper>()

const containerStyle = computed(() => ({
    width: `${props.containerWdith}px`,
    height: `${props.containerHeight}px`,
}))

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

const init = async () => {
    loading.value = true
    workbench.value?.appendChild(image.value)
    const Cropper = await loader.loadCdnSingle('cropper')

    cropper.value = new Cropper(image.value, {
        dragMode: 'move',
        viewMode: 1,
        aspectRatio: props.cropperWidth / props.cropperHeight,
        // cropBoxResizable: true, // 是否可以改变crop框大小
        toggleDragModeOnDblclick: false, // 双击切换拖动模式
        guides: true, // 网格
        // minContainerHeight: props.containerHeight,
        ...props.option,
        ready() {
            emits('init')
            loading.value = false
        },
    })
}

const getCroppedCanvas = () => {
    if (loading.value || !cropper.value) { return }

    return cropper.value.getCroppedCanvas({
        width: props.cropperWidth,
        height: props.cropperHeight,
        imageSmoothingQuality: props.imageSmoothingQuality,
    })
}

const getBlobData = () => new Promise<Blob>((resolve, reject) => {
    const canvas = getCroppedCanvas()

    if (!canvas) { return reject(new Error('error')) }
    canvas.toBlob(blob => {
        if (!blob) { return reject(new Error('error')) }
        resolve(blob)
    })
})

watch(props.option, () => {
    cropper.value?.destroy()
    init()
})

defineExpose({ instance: cropper, getCroppedCanvas, getBlobData })

onMounted(() => init())
onUnmounted(() => cropper.value?.destroy())
</script>

<style lang="scss" module>
.workbench {
    overflow: hidden;
}
</style>
