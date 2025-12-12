<template>
    <div v-if="isTextType" ref="textWrapperRef" :class="$style['text-wrapper']">
        <!-- 有tooltip且开启tooltip则渲染，不用disable可以避免渲染tooltip -->
        <!-- 这里似乎有bug，在table下会被渲染两次tooltip -->
        <ElTooltip
            v-if="tipsVisible && showTooltip"
            :effect="effect"
            :placement="placement"
            :popper-class="popperClass"
            :enterable="enterable"
            :content="combineText"
        >
            <ElImage :src="mySrc" :preview-src-list="mySrcList" :class="$style.image" lazy preview-teleported />
        </ElTooltip>
        <!-- 无tooltip或者关闭tooltip则直接渲染 -->
        <ElImage v-if="!tipsVisible || !showTooltip" :src="mySrc" :preview-src-list="mySrcList" :class="$style.image" lazy preview-teleported />

        <!-- 这里渲染文字 -->
        <span ref="textRef" :class="$style.text">
            <VcElIcon name="Picture" :class="$style.icon" />
            <VcTextEllipsis ref="comEllipsis" placement="top-start" :max-width="myMaxWidth" :show-tooltip="false"><slot>{{ text }}</slot></VcTextEllipsis>
        </span>
    </div>
    <ElImage
        v-if="isImageType"
        :src="mySrc"
        :preview-src-list="mySrcList"
        :style="imageStyle"
        :fit="fit"
        :class="$style['image-wrapper']"
        lazy
        preview-teleported
    />
</template>

<script lang="ts" setup>
import type { IImageProps } from './image'
import VcElIcon from '../el-icon/el-icon.vue'
import VcTextEllipsis from '../text-ellipsis/text-ellipsis.vue'

const props = withDefaults(defineProps<IImageProps>(), {
    type: 'image',
    text: '',
    src: '',
    previewSrcList: () => [],
    width: '160px',
    height: '90px',
    fit: 'cover',
    textMaxWidth: 0,

    // tooltip的参数
    showTooltip: true,
    effect: 'dark',
    placement: 'top',
    popperClass: '',
    enterable: false,
})

const $slots = useSlots()

const fixWidth = 5 // 修正宽度，防止文字换行
const textRef = useTemplateRef('textRef')
const textWrapperRef = useTemplateRef('textWrapperRef')
const comEllipsis = ref<InstanceType<typeof VcTextEllipsis>>()

const isImageType = computed(() => props.type === 'image')
const isTextType = computed(() => props.type === 'text')
const mySrc = computed(() => {
    if (props.type === 'text' && textRef.value) {
        // 在文字上方盖一个同样大小的透明图片以使用 el-image
        const canvas = document.createElement('canvas')
        canvas.width = textRef.value.offsetWidth + fixWidth
        canvas.height = textRef.value.getBoundingClientRect().height
        return canvas.toDataURL('image/png')
    }
    return props.src || props.previewSrcList[0]
})

// 用于宽度自动判断是否省略号
const myMaxWidth = computed(() => props.textMaxWidth || textWrapperRef.value?.offsetWidth || 0)
const imageStyle = computed(() => {
    if (isImageType.value) {
        return {
            width: props.width,
            height: props.height,
        }
    }
    return {}
})

// 插槽的文字
const combineText = computed(() => {
    if (!isTextType.value) { return '' }
    let slotText = ''
    if ($slots.default) {
        const [slot] = $slots.default({})
        slotText = slot.children?.toString() || ''
    }
    return props.text || slotText
})

// 图片列表数据
const mySrcList = computed(() => (props.previewSrcList.length === 0 ? [props.src] : props.previewSrcList))

// 由text-ellipsis组件返回是否需要显示tooltip，复用判断逻辑
const tipsVisible = computed(() => comEllipsis.value?.tipsVisible ?? false)
</script>

<style lang="scss" module>
.text-wrapper {
    position: relative;

    .image {
        position: absolute;
    }

    .text {
        display: flex;
        align-items: center;
        pointer-events: none;
    }

    .icon {
        margin-right: 8px;
        transform: scale(1.3);
        transform-origin: left center;
    }
}

.image-wrapper {
    vertical-align: middle;
}
</style>
