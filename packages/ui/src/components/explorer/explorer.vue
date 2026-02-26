<template>
    <ElSplitter v-bind="$attrs" ref="splitterRef" :layout="layout" :lazy="lazy" :class="$style.explorer">
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

const fullscreenTarget = ref<HTMLElement>()
const splitterRef = useTemplateRef('splitterRef')

props.explorerKey && useProvide(KEY_NAME, {
    fullscreenTarget,
    key: `vc-explorer-${props.explorerKey}`,
})

onMounted(() => {
    if (props.explorerKey && splitterRef.value?.$el) {
        fullscreenTarget.value = splitterRef.value.$el
    }
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
