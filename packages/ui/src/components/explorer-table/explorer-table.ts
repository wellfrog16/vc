import type { VNode } from 'vue'
import type { IColumnConfig } from '../explorer-column-table/explorer-column-table'

export interface IExplorerTableProps {
    data: any[]
    selection?: boolean
    customSelection?: 'radio' | 'checkbox'
    multipleCheckedKey?: string
    index?: boolean
    highlightCurrent?: boolean
    empty?: boolean
    emptyText?: string
    pending?: boolean
    loading?: boolean
    loadingText?: string
    size?: 'small' | 'default' | 'large'
    columnRender?: (column: IColumnConfig, row: Record<string, any>, emits: IExplorerTableEmits, index: number) => VNode
    columnConfig?: IColumnConfig[]
    columnFilter?: (column: IColumnConfig) => boolean
    rowClassName?: ((data: { row: Record<string, any>, rowIndex: number }) => string) | string
    startIndex?: number
    rowKey?: string | ((row: any) => string) // 单选或者多选时提供
}

export interface IExplorerTableEmits {
    (e: 'columnEvent', column: IColumnConfig, row: Record<string, any>, value: Record<string, any>): void
    (e: 'singleSelectionChange', row: Record<string, any>): void
    (e: 'multipleSelectionChange', row: Record<string, any>, values: Array<string | number>): void
    (e: 'selectionChange', rows: Record<string, any>[]): void
    (e: 'selectAll', checked: boolean, values: Array<string | number>): void
}
