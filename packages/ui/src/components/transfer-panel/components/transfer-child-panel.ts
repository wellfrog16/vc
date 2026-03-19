export interface ITransferChildItem {
    label: string
    icon?: string
    value: string | number
}

export interface ITransferChildPanelProps {
    title?: string
    data?: ITransferChildItem[]
    placeholder?: string
    type: 'source' | 'choiced'
    width: string
    modelValue?: string[] | number[]
    debounce?: number
    disabled?: boolean
}

export interface ITransferChildPanelEmits {
    (e: 'change', type: number, item?: ITransferChildItem): void
    (e: 'update:modelValue', value: string[] | number[]): void
}
