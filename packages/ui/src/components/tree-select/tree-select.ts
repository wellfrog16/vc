import type { TreeNodeData } from 'element-plus'

export type TreeSelectValue = string | number | (string | number)[] | undefined

export interface ITreeSelectProps {
    emptyText?: string
    placeholder?: string
    disabled?: boolean
    multiple?: boolean
    checkStrictly?: boolean
    modelValue: TreeSelectValue
    options?: TreeNodeData[]
    props?: Record<string, any>
    width?: string | number
    filterable?: boolean
    filterEmptyText?: string
    clearable?: boolean
}

export interface ITreeSelectEmits {
    (e: 'update:modelValue', value: TreeSelectValue): void
    (e: 'change', value: TreeSelectValue, node?: any): void
    (e: 'blur', event: FocusEvent): void
}
