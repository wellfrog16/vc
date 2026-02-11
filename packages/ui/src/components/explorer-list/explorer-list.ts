import type { IButtonProps } from '../button/button'

export interface IExplorerListItem<T = any> {
    label: string
    icon?: string
    value: string | number
    original?: T
}

export interface IExplorerListProps {
    data?: IExplorerListItem[]
    actions?: ('create' | 'modify' | 'remove')[]
    group?: string
    filterMethod?: (keyword: string, item: IExplorerListItem) => boolean
    emptyText?: string
    loading?: boolean
    loadingText?: string
    highlightCurrent?: boolean
    confirmParams?: (item: IExplorerListItem) => IButtonProps['confirm']
}

export interface IExplorerListEmits {
    (e: 'itemClick', value: string | number, item: IExplorerListItem, event: MouseEvent): void
    (e: 'create', value: string | number, item: IExplorerListItem): void
    (e: 'modify', value: string | number, item: IExplorerListItem): void
    (e: 'remove', value: string | number, item: IExplorerListItem): void
}
