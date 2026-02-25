import type { Reactive, Ref } from 'vue'
import type { IColumnConfig } from '../explorer-column-table/explorer-column-table'
import { useInject } from '@/use/useStore'

export interface IExplorerPanelProps {
    resizable?: boolean
    padding?: number
}

export interface IExplorerPanelState {
    fullscreenTarget: Ref<HTMLElement> // 全屏的目标 div
    columnConfig: Ref<IColumnConfig[]> // 列配置
    filterKeyword: Ref<string> // 过滤关键字
    actions: Reactive<Record<string, () => void>> // 操作
}

export const KEY_NAME = Symbol('VCExplorerPanelState')
export const injectExplorerPanelState = () => useInject<IExplorerPanelState>(KEY_NAME)
