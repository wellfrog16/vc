import type { CheckboxGroupProps, RadioGroupProps } from 'element-plus'

export interface IChoiceProps {
    multiple?: boolean
    type?: RadioGroupProps['type'] | CheckboxGroupProps['type']
    options: RadioGroupProps['options'] | CheckboxGroupProps['options'] | string[]
    disabled?: boolean
}
