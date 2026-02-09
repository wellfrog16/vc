import type { IButtonProps } from '../button/button'

export interface IExplorerListItemProps<T = any> {
    label: string
    icon?: string
    value: string | number
    original?: T
}

export interface IExplorerListProps {
    data?: IExplorerListItemProps[]
    actions?: ('create' | 'modify' | 'remove')[]
    group?: string
    filterMethod?: (keyword: string, item: IExplorerListItemProps) => boolean
    emptyText?: string
    loading?: boolean
    loadingText?: string
    confirmRender?: (item: IExplorerListItemProps) => IButtonProps['confirm']
}

export interface IExplorerListEmits {
    (e: 'click', value: string | number, original: any, event: MouseEvent): void
    (e: 'create', value: string | number, item: IExplorerListItemProps): void
    (e: 'modify', value: string | number, item: IExplorerListItemProps): void
    (e: 'remove', value: string | number, item: IExplorerListItemProps): void
}
