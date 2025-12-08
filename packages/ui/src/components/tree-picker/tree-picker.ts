import type { CascaderOption, CascaderProps } from 'element-plus/es/components/cascader-panel'

export interface ITreePickerProps {
    emptyText?: string
    placeholder?: string
    disabled?: boolean
    multiple?: boolean
    modelValue: string | number | string[] | number[] | undefined
    options?: CascaderOption[]
    props?: CascaderProps
    width?: string
    block?: boolean
    filterable?: boolean
    filterEmptyText?: string
}
