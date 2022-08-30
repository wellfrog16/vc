<template>
    <div v-if="isTextType" ref="eleTextWrapper" :class="$style['text-wrapper']">
        <!-- 有tooltip且开启tooltip则渲染，不用disable可以避免渲染tooltip -->
        <!-- 这里似乎有bug，在table下会被渲染两次tooltip -->
        <ElTooltip
            v-if="tipsVisible && showTooltip"
            :effect="effect"
            :placement="placement"
            :popper-class="popperClass"
            :popper-options="popperOptions"
            :enterable="enterable"
            :content="combineText"
        >
            <ElImage
                :src="mySrc"
                :preview-src-list="mySrcList"
                :class="$style.image"
                lazy
            />
        </ElTooltip>
        <!-- 无tooltip或者关闭tooltip则直接渲染 -->
        <ElImage
            v-if="!tipsVisible || !showTooltip"
            :src="mySrc"
            :preview-src-list="mySrcList"
            :class="$style.image"
            lazy
        />

        <!-- 这里渲染文字 -->
        <span ref="eleText" :class="$style.text">
            <HElIcon name="Picture" :class="$style.icon" />
            <HTextEllipsis ref="eleEllipsis" placement="top-start" :max-width="myMaxWidth" :show-tooltip="false"><slot>{{ text }}</slot></HTextEllipsis>
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
    />
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue'
import { ElImage, ElTooltip } from 'element-plus'
import HElIcon from '@/components/el-icon/index.vue'
import HTextEllipsis from '@/components/text-ellipsis/index.vue'
import type { PropType } from 'vue'

const props = defineProps({
    type: { type: String as PropType<'image' | 'text'>, default: 'image' },
    text: { type: String, default: '' },
    src: { type: String, default: '' },
    previewSrcList: { type: Array as PropType<string[]>, default: () => [] },
    width: { type: String, default: '160px' },
    height: { type: String, default: '90px' },
    fit: { type: String as PropType<'fill' | 'contain' | 'cover' | 'none' | 'scale-down'>, default: 'cover' },
    textMaxWidth: { type: Number, default: 0 },

    // tooltip的参数
    showTooltip: { type: Boolean, default: true }, // 是否显示tooltip
    effect: { type: String as PropType<import('element-plus/es/components/popper').PopperEffect>, default: 'dark' },
    placement: { type: String as PropType<import('element-plus/es/components/popper').Placement>, default: 'top' }, // tips位置
    popperOptions: { type: Object, default: () => ({ boundariesElement: 'body', gpuAcceleration: false }) }, // popper.js 的参数
    popperClass: { type: String, default: '' }, // popper样式
    enterable: { type: Boolean, default: true }, // 鼠标是否可进入到 tooltip 中
})

const slots = useSlots()

const fixWidth = 5 // 修正宽度，防止文字换行
const eleText = ref<HTMLElement>()
const eleTextWrapper = ref<HTMLElement>()
const eleEllipsis = ref<InstanceType<typeof HTextEllipsis>>()

const isImageType = computed(() => props.type === 'image')
const isTextType = computed(() => props.type === 'text')
const mySrc = computed(() => {
    if (props.type === 'text' && eleText.value) {
        // 在文字上方盖一个同样大小的透明图片以使用 el-image
        const canvas = document.createElement('canvas')
        canvas.width = eleText.value.offsetWidth + fixWidth
        canvas.height = parseInt(window.getComputedStyle(eleText.value).lineHeight, 10)
        return canvas.toDataURL('image/png')
    }
    return props.src || props.previewSrcList[0]
})

// 用于宽度自动判断是否省略号
const myMaxWidth = computed(() => props.textMaxWidth || eleTextWrapper.value?.offsetWidth || 0)
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
    if (slots.default) {
        const [slot] = slots.default()
        slotText = slot.children?.toString() || ''
    }
    return props.text || slotText
})

// 图片列表数据
const mySrcList = computed(() => (props.previewSrcList.length === 0 ? [props.src] : props.previewSrcList))

// 由text-ellipsis组件返回是否需要显示tooltip，复用判断逻辑
const tipsVisible = computed(() => eleEllipsis.value?.tipsVisible ?? false)
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
