import type { SelectProps } from 'element-plus/es/components/select'

export interface ISelectProps {
    block?: boolean
    width?: string
    options: SelectProps['options'] | string[]
    disabled?: boolean
}
