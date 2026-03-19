import type { ITransferChildItem } from '../transfer-panel/components/transfer-child-panel'

export interface ITransferProps {
    modelValue?: string[] | number[]
    data?: ITransferChildItem[]
    placeholder?: string
    width?: string
    block?: boolean
    disabled?: boolean
}

export interface ITransferEmits {
    (e: 'update:modelValue', value: string[] | number[]): void
}
