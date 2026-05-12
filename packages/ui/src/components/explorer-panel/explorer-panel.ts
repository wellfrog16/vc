import type { Reactive, Ref } from 'vue'
import type { IColumnConfig } from '../explorer-column-table/explorer-column-table'
import { useInject } from '@/use/useStore'

export interface IExplorerPanelProps {
    resizable?: boolean
    padding?: number
}

export interface IExplorerPanelState {
    fullscreenTarget: Ref<HTMLElement> // 全屏的目标 div
    columnConfig: Ref<IColumnConfig[]> // 列配置，用于 explorer-table 拖动列改变配置，通过这里传递给 column-tools
    filterKeyword: Ref<string> // 过滤关键字
    actions: Reactive<{
        saveColumnConfig: () => void // 保存列配置 explorer-table 和 column-tools 共用。explorer-table 调 column-tools 的 saveColumnConfig
    }> // 操作
}

export const KEY_NAME = Symbol('VCExplorerPanelState')
export const injectExplorerPanelState = () => useInject<IExplorerPanelState>(KEY_NAME)
