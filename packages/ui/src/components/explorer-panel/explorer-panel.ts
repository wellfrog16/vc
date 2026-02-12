import type { Ref } from 'vue'
import type { IColumnConfig } from '../explorer-table/explorer-table'
import { useInject } from '@/use/useStore'

export interface IExplorerPanelProps {
    resizable?: boolean
    padding?: number
    group?: string
}

export interface IExplorerState {
    fullscreenTarget: Ref<HTMLElement> // 全屏的目标 div
    columnConfig: Ref<IColumnConfig[]> // 列配置
    filterKeyword: Ref<string> // 过滤关键字
}

export const KEY_NAME = Symbol('VCExplorerPanelState')
export const injectExplorerPanelState = () => useInject<IExplorerState>(KEY_NAME)
