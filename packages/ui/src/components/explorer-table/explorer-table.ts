import type { VNode } from 'vue'
import type { IColumnConfig } from '../explorer-column-table/explorer-column-table'

export interface IExplorerTableProps {
    data: any[]
    selection?: boolean
    singleSelection?: boolean
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
    rowKey?: string | ((row: any) => string) // 单选或者多选时提供
}

export interface IExplorerTableEmits {
    (e: 'columnEvent', column: IColumnConfig, row: Record<string, any>, value: Record<string, any>): void
    (e: 'singleSelect', row: Record<string, any>): void
    (e: 'selectionChange', rows: Record<string, any>[]): void
}
