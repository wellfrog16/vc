import type { SelectProps } from 'element-plus/es/components/select'

export interface ISelectProps {
    width?: string | number
    options: SelectProps['options'] | string[]
    disabled?: boolean
}

export interface ISelectEmits {
    (e: 'change', value: any): void
    (e: 'blur', event: FocusEvent): void
}
