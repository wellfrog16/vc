<template>
    <ElSplitter :layout="layout" :lazy="lazy" :class="$style.explorer" v-bind="$attrs">
        <slot />
    </ElSplitter>
</template>

<script setup lang="ts">
import type { IExplorerProps } from './explorer'
import { useProvide } from '@/use/useStore'
import { KEY_NAME } from './explorer'

const props = withDefaults(defineProps<IExplorerProps>(), {
    layout: 'horizontal',
    lazy: false,
})
const filterKeyword = ref<Record<string, string>>({})
const fullscreenTarget = ref<Record<string, string>>({})

useProvide(KEY_NAME, {
    filterKeyword,
    fullscreenTarget,
    key: `vc-explorer-${props.explorerKey}`,
})
</script>

<style lang="scss" module>
.explorer {
    border: 1px solid var(--el-border-color-lighter);
    border-radius: var(--el-border-radius-base);
    display: flex;
    flex-grow: 1;
    height: 100px;
    background-color: var(--el-fill-color-blank);
    box-sizing: border-box;

    :glbal {
        .el-splitter__mask {
            z-index: 10000;
            transform: translateX(0);
        }
    }
}
</style>
