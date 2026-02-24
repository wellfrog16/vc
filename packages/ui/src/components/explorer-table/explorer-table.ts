import type { VNode } from 'vue'
import type { IColumnConfig } from '../explorer-column-table/explorer-column-table'

export interface IExplorerTableProps {
    data: any[]
    selection?: boolean
    highlightCurrent?: boolean
    size?: 'small' | 'default' | 'large'
    columnRender?: (column: IColumnConfig) => VNode
    columnConfig?: IColumnConfig[]
}
