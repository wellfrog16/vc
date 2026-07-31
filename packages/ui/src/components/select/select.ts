import type { SelectProps } from 'element-plus/es/components/select'

export interface ISelectProps {
    width?: string | number
    options: SelectProps['options'] | string[]
}
