<template>
    <ElSplitterPanel ref="panelRef" :class="$style.panel" :resizable="resizable" v-bind="$attrs">
        <div :class="$style.container"><slot /></div>
    </ElSplitterPanel>
</template>

<script setup lang="ts">
import type { IExplorerPanelProps } from './explorer-panel'
import { injectState } from '../explorer/explorer'

const props = withDefaults(defineProps<IExplorerPanelProps>(), {
    resizable: false,
    padding: 8,
})

const panelRef = useTemplateRef('panelRef')
const { fullscreenTarget } = injectState()

onMounted(() => {
    if (props.group && panelRef.value?.splitterPanelRef) {
        fullscreenTarget.value[props.group] = panelRef.value.splitterPanelRef
    }
})
</script>

<style lang="scss" module>
.panel {
    display: flex;
    flex-direction: column;
    // flex-grow: 1;
    // height: 100px;
}

.container {
    display: flex;
    flex-direction: column;
    padding: v-bind('`${padding}px`');
    flex-grow: 1;
    height: 100px;
}
</style>
