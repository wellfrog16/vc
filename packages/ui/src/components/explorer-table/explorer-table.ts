import type { VNode } from 'vue'

export interface IColumnConfig {
    prop: string
    label: string
    width?: number
    minWidth?: number
    visible?: boolean
    fixed?: 'left' | 'right'
    align?: 'left' | 'center' | 'right'
    widthType?: 'width' | 'minWidth' // 编辑用中间数据
    formFixed?: ('left' | 'right')[] // 编辑用中间数据
}

export interface IExplorerTableProps {
    data: any[]
    selection?: boolean
    highlightCurrent?: boolean
    size?: 'small' | 'large'
    columnRender?: (column: IColumnConfig) => VNode
    columnConfig?: IColumnConfig[]
}
