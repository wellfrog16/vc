import type { PopconfirmProps, SwitchProps } from 'element-plus'

export interface ISwitchProps {
    modelValue: SwitchProps['modelValue']
    confirmTitle?: string
    disabled?: boolean
    className?: string
    confirm?: boolean
    confirmProps?: PopconfirmProps
}
