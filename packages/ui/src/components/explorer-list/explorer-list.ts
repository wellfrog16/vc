import type { CheckboxValueType } from 'element-plus'
import type { IButtonProps } from '../button/button'

export interface IExplorerListItem<T = any> {
    label: string
    icon?: string
    value: string | number
    original?: T
}

export interface IExplorerListProps {
    modelValue?: (string | number)[] | undefined
    data?: IExplorerListItem[]
    actions?: ('create' | 'modify' | 'remove' | 'up' | 'down' | 'action')[]
    filterMethod?: (keyword: string, item: IExplorerListItem) => boolean
    emptyText?: string
    pending?: boolean
    loading?: boolean
    loadingText?: string
    highlightCurrent?: boolean
    deepWatch?: boolean
    showCheckbox?: boolean
    confirmParams?: (item: IExplorerListItem) => IButtonProps['confirm']
}

export interface IExplorerListEmits {
    (e: 'update:modelValue', value: (string | number)[] | undefined): void
    (e: 'valueChange', value: CheckboxValueType[]): void
    (e: 'itemClick', value: string | number, item: IExplorerListItem, event: MouseEvent): void
    (e: 'create', value: string | number, item: IExplorerListItem): void
    (e: 'modify', value: string | number, item: IExplorerListItem): void
    (e: 'remove', value: string | number, item: IExplorerListItem): void
    (e: 'up', value: string | number, node: Node): void
    (e: 'down', value: string | number, node: Node): void
}
