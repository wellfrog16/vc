import type { CascaderNode, CascaderOption, CascaderProps, CascaderValue } from 'element-plus/es/components/cascader-panel'

export interface ITreePickerProps {
    emptyText?: string
    placeholder?: string
    disabled?: boolean
    multiple?: boolean
    modelValue: string | number | string[] | number[] | undefined
    options?: CascaderOption[]
    props?: CascaderProps
    width?: string | number
    filterable?: boolean
    filterEmptyText?: string
}

export interface ITreePickerEmits {
    (e: 'update:modelValue', value: string | number | string[] | number[] | undefined): void
    (e: 'change', value: CascaderValue | null | undefined, node?: CascaderNode[]): void
    (e: 'blur', event: FocusEvent): void
}
