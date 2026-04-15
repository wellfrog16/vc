<template>
    <ElScrollbar ref="scrollbarRef" v-bind="$attrs" :class="{ [$style.scrollbar]: flex, [$style[`fill-height`]]: fillHeight }">
        <slot />
    </ElScrollbar>
</template>

<script setup lang="ts">
import type { IScrollbarProps } from './scrollbar'

withDefaults(defineProps<IScrollbarProps>(), {
    flex: true,
    fillHeight: true,
    viewMargin: '0 10px',
})

const scrollbarRef = useTemplateRef('scrollbarRef')

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
</style>
