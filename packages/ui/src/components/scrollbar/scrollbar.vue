<template>
    <ElScrollbar ref="scrollbarRef" v-bind="props" :class="{ [$style.scrollbar]: flex }">
        <slot />
    </ElScrollbar>
</template>

<script setup lang="ts">
import type { IScrollbarProps } from './scrollbar'

const props = withDefaults(defineProps<IScrollbarProps>(), {
    padding: 0,
})

const scrollbarRef = useTemplateRef('scrollbarRef')

defineExpose({ ...scrollbarRef.value! })
</script>

<style lang="scss" module>
.scrollbar {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100px;

    :global {
        .el-scrollbar__wrap {
            flex-grow: 1;
            flex-direction: column;
            min-height: 100px;
            display: flex;
        }

        .el-scrollbar__view {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            min-height: 100px;
            padding: v-bind('`${padding}px`');
        }
    }
}
</style>
