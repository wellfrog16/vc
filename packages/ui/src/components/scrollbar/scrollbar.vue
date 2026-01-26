<template>
    <ElScrollbar ref="scrollbarRef" v-bind="{ ...$attrs, ...props }" :class="{ [$style.scrollbar]: flex }">
        <slot />
    </ElScrollbar>
</template>

<script setup lang="ts">
import type { IScrollbarProps } from './scrollbar'

const props = defineProps<IScrollbarProps>()

const scrollbarRef = useTemplateRef('scrollbarRef')

defineExpose({ ...scrollbarRef.value! })
</script>

<style lang="scss" module>
.scrollbar {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 10px;

    :global {
        .el-scrollbar__wrap {
            flex-grow: 1;
            flex-direction: column;
            height: 10px;
            display: flex;
        }

        .el-scrollbar__view {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            height: 10px;
        }
    }
}
</style>
