export interface IExplorerListItemProps<T = any> {
    label: string
    icon?: string
    value: string | number
    original?: T
}

export interface IExplorerListProps {
    data?: IExplorerListItemProps[]
    actions?: ('create' | 'modify' | 'delete')[]
    localFilter?: boolean
    filterMethod?: (keyword: string, item: IExplorerListItemProps) => boolean
    emptyText?: string
    loading?: boolean
    loadingText?: string
}

export interface IExplorerListEmits {
    (e: 'click', value: string | number, original: any, event: MouseEvent): void
}

export interface IExplorerListEmits2 {
    (e: 'click', value: string | number): void
}
