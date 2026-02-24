import type { IColumnConfig } from '../explorer-column-table/explorer-column-table'

export interface IExplorerToolsProps {
    tools?: ('search' | 'refresh' | 'fullscreen' | 'setter' | 'layout')[]
    searchPlaceholder?: string
    layout?: 'card' | 'list'
    create?: boolean
    createText?: string
    fullscreenTarget?: 'panel' | 'page'
    throttle?: number
    toolsKey?: string
    columnSetterSize?: 'small' | 'default' | 'large' // 预留，未兼容 default/large 后的样式
    columnToStorage?: boolean
    columnResetVisible?: boolean
}

export interface IExplorerToolsEmits {
    (e: 'refresh'): void
    (e: 'fullscreen', status: boolean): void
    (e: 'search', value: string): void
    (e: 'layout', value: 'card' | 'list'): void
    (e: 'create'): void
    (e: 'configConfirm', config: IColumnConfig[]): void
    (e: 'columnReset'): void
}

export interface IColumnSetterProps {
    data?: IColumnConfig[]
    size?: 'small' | 'default' | 'large' // 预留，未兼容 default/large 后的样式
    columnToStorage?: boolean
    toolsKey?: string
    resetVisible?: boolean
}

export interface IColumnSetterEmits {
    (e: 'update:data', data: IColumnConfig[]): void
    (e: 'configConfirm', data: IColumnConfig[]): void
    (e: 'reset'): void
}
