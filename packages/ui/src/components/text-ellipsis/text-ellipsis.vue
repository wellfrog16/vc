<template>
    <div ref="mainRef" :class="$style.main" :style="mainStyle">
        <!-- 显示tooltip并且tips可见，不用disable可以避免渲染tooltip -->
        <ElTooltip
            v-if="tipsVisible && showTooltip"
            :effect="effect"
            :placement="placement"
            :popper-class="popperClass"
            :popper-options="popperOptions"
            :enterable="enterable"
        >
            <div ref="ellipsisRef" :class="$style.ellipsis" :style="fixStyle"><slot>{{ content }}</slot></div>
            <template #content>
                <slot>{{ content }}</slot>
            </template>
        </ElTooltip>
        <!-- 显示tooltip并且tips不可见，仅显示文案 -->
        <div v-if="tipsVisible && !showTooltip" ref="ellipsisRef" :class="$style.ellipsis" :style="fixStyle"><slot>{{ content }}</slot></div>
        <div v-if="textVisible" ref="textRef" :class="$style.text"><slot>{{ content }}</slot></div>
    </div>
</template>

<script lang="ts" setup>
import type { ITextEllipsisProps } from './text-ellipsis'
import { ElTooltip } from 'element-plus'
import { computed, nextTick, onMounted, ref, useTemplateRef, watch } from 'vue'

const props = withDefaults(defineProps<ITextEllipsisProps>(), {
    type: 'single',
    effect: 'light',
    placement: 'top',
    content: '',
    popperOptions: () => ({ boundariesElement: 'body', gpuAcceleration: false }),
    popperClass: '',
    enterable: false,
    maxWidth: 0,
    showTooltip: true,
})

const tipsVisible = ref(false)
const textVisible = ref(false)
const realWidth = ref(0)
const mainRef = useTemplateRef('mainRef')
const textRef = useTemplateRef('textRef')
const ellipsisRef = useTemplateRef('ellipsisRef')

const mainStyle = computed(() => (props.maxWidth ? { width: `${props.maxWidth}px` } : {}))
const fixStyle = computed(() => ({ width: `${realWidth.value}px` }))

// 检查是否溢出
function isOverflow() {
    return new Promise<boolean>(resolve => {
        tipsVisible.value = true
        textVisible.value = true

        nextTick(() => {
            if (textRef.value && ellipsisRef.value) {
                const originWidth = textRef.value?.offsetWidth
                const ellipsisWidth = props.maxWidth || ellipsisRef.value?.offsetWidth
                resolve(originWidth > ellipsisWidth)
            }
            else {
                resolve(false)
            }
        })
    })
}

// 更新数据和结构
async function update() {
    const isOverflowX = await isOverflow()
    tipsVisible.value = isOverflowX
    textVisible.value = !isOverflowX
    realWidth.value = mainRef.value?.clientWidth || 0
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
