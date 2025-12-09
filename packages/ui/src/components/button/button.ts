import type { ButtonType } from 'element-plus/es/components/button/src/button'

export interface IIconOption {
    name: string
    type?: IGlobal.IconType
    position?: 'left' | 'right'
}

export interface IButtonProps {
    icon?: IIconOption
    time?: number
    type?: ButtonType
    confirm?: {
        type?: 'popconfirm' | 'messagebox' | 'none' // 非 popconfirm， messagebox 的其他值不会执行 confirm
        title?: string
        confirmButtonText?: string
        cancelButtonText?: string
        msg?: string
    }
}
