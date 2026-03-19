import type { ITransferChildItem } from './components/transfer-child-panel'

export interface ITransferPanelProps {
    modelValue?: string[] | number[]
    title?: string
    data?: ITransferChildItem[]
    height?: string | number
    halfWidth?: string | number
    disabled?: boolean
}

export interface ITransferPanelEmits {
    (e: 'change', type: number, item?: ITransferChildItem): void
    (e: 'update:modelValue', value: string[] | number[]): void
}
