import type { VNode } from 'vue'
import type { IColumnConfig } from '../explorer-column-table/explorer-column-table'

export interface IExplorerTableProps {
    data: any[]
    selection?: boolean
    index?: boolean
    highlightCurrent?: boolean
    emptyText?: string
    pending?: boolean
    loading?: boolean
    loadingText?: string
    size?: 'small' | 'default' | 'large'
    columnRender?: (column: IColumnConfig, row: Record<string, any>, emits: IExplorerTableEmits, index: number) => VNode
    columnConfig?: IColumnConfig[]
    startIndex?: number
}

export interface IExplorerTableEmits {
    (e: 'columnEvent', column: IColumnConfig, row: Record<string, any>, value: Record<string, any>): void
}
