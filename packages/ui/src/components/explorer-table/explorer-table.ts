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
    noMoreText?: string // 没有更多数据提示文本
    loading?: boolean
    loadingText?: string
    size?: 'small' | 'default' | 'large'
    columnRender?: (column: IColumnConfig, row: Record<string, any>, emits: IExplorerTableEmits, index: number) => VNode
    columnConfig?: IColumnConfig[]
    columnFilter?: (column: IColumnConfig) => boolean
    rowClassName?: ((data: { row: Record<string, any>, rowIndex: number }) => string) | string
    startIndex?: number
    rowKey?: string | ((row: any) => string) // 单选或者多选时提供
    scrollLoad?: boolean // 是否开启滚动加载
    scrollLoadDisabled?: boolean // 是否禁用继续滚动加载（例如没有更多数据时）
    scrollLoadRootMargin?: string // IntersectionObserver rootMargin
    scrollLoadThreshold?: number // IntersectionObserver threshold
}

export interface IExplorerTableEmits {
    (e: 'columnEvent', column: IColumnConfig, row: Record<string, any>, value: Record<string, any>): void
    (e: 'singleSelectionChange', row: Record<string, any>, value: string | number): void
    (e: 'multipleSelectionChange', row: Record<string, any>, values: Array<string | number>): void
    (e: 'selectionChange', rows: Record<string, any>[]): void
    (e: 'selectAll', checked: boolean, values: Array<string | number>): void
    (e: 'loadMore'): void
}
