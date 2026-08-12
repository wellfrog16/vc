<template>
    <ElScrollbar ref="scrollbarRef" :class="{ [$style.scrollbar]: flex, [$style[`fill-height`]]: fillHeight }">
        <slot v-if="!empty" />
        <slot v-else name="empty">
            <div :class="$style['status-text']">
                <ElText>{{ emptyText }}</ElText>
            </div>
        </slot>
        <div v-if="scrollLoad && !empty" ref="sentinelRef" :class="$style.sentinel">
            <slot v-if="loading" name="loading">
                <div :class="$style.loading">
                    <el-icon class="is-loading"><Loading /></el-icon>
                    <ElText>{{ loadingText }}</ElText>
                </div>
            </slot>
            <slot v-else-if="scrollLoadDisabled" name="noMore">
                <div v-if="noMoreText" :class="$style['status-text']"><ElText>{{ noMoreText }}</ElText></div>
            </slot>
        </div>
    </ElScrollbar>
</template>

<script setup lang="ts">
import type { IScrollbarProps } from './scrollbar'
import { Loading } from '@element-plus/icons-vue'

const props = withDefaults(defineProps<IScrollbarProps>(), {
    flex: true,
    fillHeight: true,
    viewMargin: '0 10px',
    scrollLoad: false,
    scrollLoadDisabled: false,
    scrollLoadRootMargin: '100px',
    scrollLoadThreshold: 0,
    loading: false,
    loadingText: '加载中',
    noMoreText: '没有更多了',
    empty: false,
    emptyText: '暂无数据',
})

const emits = defineEmits<{
    (e: 'loadMore'): void
}>()

const scrollbarRef = useTemplateRef('scrollbarRef')
const sentinelRef = useTemplateRef('sentinelRef')

const scrollLoadEnabled = computed(() =>
    props.scrollLoad && !props.loading && !props.scrollLoadDisabled,
)

const scrollRoot = computed(() => scrollbarRef.value?.wrapRef ?? null)

useIntersectionObserver(
    sentinelRef,
    ([{ isIntersecting }]) => {
        if (isIntersecting && scrollLoadEnabled.value) {
            emits('loadMore')
        }
    },
    {
        root: scrollRoot,
        rootMargin: props.scrollLoadRootMargin,
        threshold: props.scrollLoadThreshold,
    },
)

defineExpose({ scrollbarRef })
</script>

<style lang="scss" module>
.scrollbar {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    > :global(.el-scrollbar__wrap) {
        flex-grow: 1;
        flex-direction: column;
        display: flex;
    }

    > :global(.el-scrollbar__wrap > .el-scrollbar__view) {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin: v-bind(viewMargin);
    }
}

.fill-height {
    height: 10px;
}

.sentinel {
    height: auto;
}

.loading {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 4px;
}

.status-text {
    padding: 12px;
    text-align: center;
}
</style>
