<template>
    <ElSplitterPanel ref="panelRef" :class="$style.panel" :resizable="resizable" v-bind="$attrs">
        <div :class="$style.container"><slot /></div>
    </ElSplitterPanel>
</template>

<script setup lang="ts">
import type { IColumnConfig } from '../explorer-column-table/explorer-column-table'
import type { IExplorerPanelProps } from './explorer-panel'
import { useProvide } from '@/use/useStore'
import { KEY_NAME } from './explorer-panel'

withDefaults(defineProps<IExplorerPanelProps>(), {
    resizable: false,
    padding: 8,
})

const panelRef = useTemplateRef('panelRef')
const fullscreenTarget = ref<HTMLElement>()
const columnConfig = ref<IColumnConfig[]>([])
const filterKeyword = ref('')

useProvide(KEY_NAME, {
    fullscreenTarget,
    columnConfig,
    filterKeyword,
})

onMounted(() => {
    if (panelRef.value?.splitterPanelRef) {
        fullscreenTarget.value = panelRef.value.splitterPanelRef
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
