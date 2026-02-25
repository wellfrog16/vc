import type { VNode } from 'vue'
import type { IColumnConfig } from '../explorer-column-table/explorer-column-table'

export interface IExplorerTableProps {
    data: any[]
    selection?: boolean
    index?: boolean
    highlightCurrent?: boolean
    size?: 'small' | 'default' | 'large'
    columnRender?: (row: any, column: IColumnConfig, index: number) => VNode
    columnConfig?: IColumnConfig[]
}
