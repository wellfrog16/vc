<template>
    <div ref="eleMain" :class="$style.main" :style="mainStyle">
        <!-- 显示tooltip并且tips可见，不用disable可以避免渲染tooltip -->
        <ElTooltip
            v-if="tipsVisible && showTooltip"
            :effect="effect"
            :placement="placement"
            :popper-class="popperClass"
            :popper-options="popperOptions"
            :enterable="enterable"
        >
            <div ref="eleEllipsis" :class="$style.ellipsis" :style="fixStyle"><slot>{{ content }}</slot></div>
            <template #content>
                <slot>{{ content }}</slot>
            </template>
        </ElTooltip>
        <!-- 显示tooltip并且tips不可见，仅显示文案 -->
        <div v-if="tipsVisible && !showTooltip" ref="eleEllipsis" :class="$style.ellipsis" :style="fixStyle"><slot>{{ content }}</slot></div>
        <div v-if="textVisible" ref="eleText" :class="$style.text"><slot>{{ content }}</slot></div>
    </div>
</template>

<script lang="ts" setup>
import { ElTooltip } from 'element-plus'
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import type { PropType } from 'vue'
import type { Placement, PopperEffect } from 'element-plus/es/components/popper'

const props = defineProps({
    type: { type: String, default: 'single' }, // 单行多行，多行暂不支持
    effect: { type: String as PropType<PopperEffect>, default: 'dark' },
    placement: { type: String as PropType<Placement>, default: 'top' }, // tips位置
    content: { type: String, default: '' },
    popperOptions: { type: Object, default: () => ({ boundariesElement: 'body', gpuAcceleration: false }) }, // popper.js 的参数
    popperClass: { type: String, default: '' }, // popper样式
    enterable: { type: Boolean, default: true }, // 鼠标是否可进入到 tooltip 中
    maxWidth: { type: Number, default: 0 }, // 自定义文案的最大长度
    showTooltip: { type: Boolean, default: true }, // 是否显示tooltip
})

const tipsVisible = ref(false)
const textVisible = ref(false)
const realWidth = ref(0)
const eleMain = ref<HTMLDivElement>()
const eleText = ref<HTMLElement>()
const eleEllipsis = ref<HTMLElement>()

const mainStyle = computed(() => (props.maxWidth ? { width: `${props.maxWidth}px` } : {}))
const fixStyle = computed(() => ({ width: `${realWidth.value}px` }))

// 检查是否溢出
const isOverflow = () => new Promise<boolean>(resolve => {
    tipsVisible.value = true
    textVisible.value = true

    nextTick(() => {
        if (eleText.value && eleEllipsis.value) {
            const originWidth = eleText.value?.offsetWidth
            const ellipsisWidth = props.maxWidth || eleEllipsis.value?.offsetWidth
            resolve(originWidth > ellipsisWidth)
        }
        else {
            resolve(false)
        }
    })
})

// 更新数据和结构
const update = async () => {
    const isOverflowX = await isOverflow()
    tipsVisible.value = isOverflowX
    textVisible.value = !isOverflowX
    realWidth.value = eleMain.value?.clientWidth || 0
}

const watchData = computed(() => `${props.content}${props.maxWidth}${props.popperClass}`)

// 可优化，只监听必要属性
watch(watchData, () => update(), { immediate: true })
watch(realWidth, () => update())
onMounted(() => nextTick(() => update()))
defineExpose({ tipsVisible })
</script>

<style lang="scss" module>
.main {
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
}

.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.text {
    display: inline;
    white-space: nowrap;
}
</style>
