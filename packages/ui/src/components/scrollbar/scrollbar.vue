<template>
    <ElScrollbar ref="scrollbarRef" v-bind="props" :class="{ [$style.scrollbar]: flex, [$style[`fill-height`]]: fillHeight }">
        <slot />
    </ElScrollbar>
</template>

<script setup lang="ts">
import type { IScrollbarProps } from './scrollbar'

const props = withDefaults(defineProps<IScrollbarProps>(), {
    padding: 0,
    flex: true,
    fillHeight: true,
})

const scrollbarRef = useTemplateRef('scrollbarRef')

defineExpose({ instance: scrollbarRef.value })
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
        padding: v-bind('`${padding}px`');
    }
}

.fill-height {
    height: 10px;
}
</style>
