import type { ButtonProps } from 'element-plus'

export interface IEasyPaginationProps {
    size?: ButtonProps['size']
    prevText?: string
    nextText?: string
    currentPage?: number
    haveNext?: boolean
}
