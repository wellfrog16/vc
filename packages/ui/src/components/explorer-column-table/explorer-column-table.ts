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

export interface IExplorerColumnTableProps {
    data: IColumnConfig[]
    size?: 'small' | 'default' | 'large' // 预留，未兼容 default/large 后的样式
    mode: 'easy' | 'full'
    highlightCurrent?: boolean
    height?: number | string
    emptyColumn?: boolean
}

export interface IExplorerColumnTableEmits {
    (e: 'update:data', data: IColumnConfig[]): void
}
