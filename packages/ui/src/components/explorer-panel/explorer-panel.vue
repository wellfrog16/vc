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

const props = withDefaults(defineProps<IExplorerPanelProps>(), {
    resizable: false,
    padding: 8,
})

const panelRef = useTemplateRef('panelRef')
const fullscreenTarget = ref<HTMLElement>()
const columnConfig = ref<IColumnConfig[]>([])
const filterKeyword = ref('')
const actions = reactive({
    saveColumnConfig: () => {},
})
const commonState = ref<Record<string, any>>()

useProvide(KEY_NAME, {
    fullscreenTarget,
    columnConfig,
    filterKeyword,
    actions,
    commonState,
})

const commonStateWatch = watch(() => props.commonState, () => {
    commonState.value = props.commonState
}, { immediate: true, deep: true })

onMounted(() => {
    if (panelRef.value?.splitterPanelRef) {
        fullscreenTarget.value = panelRef.value.splitterPanelRef
    }
})

onBeforeUnmount(() => commonStateWatch.stop())
</script>

<style lang="scss" module>
.panel {
    display: flex;
    flex-direction: column;
    // flex-grow: 1;
    // height: 100px;
    :global {
        .vc-explorer-query + .vc-explorer-tools {
            padding-top: 8px;
        }
    }
}

.container {
    display: flex;
    flex-direction: column;
    padding: v-bind('`${padding}px`');
    flex-grow: 1;
    height: 100px;
}
</style>
