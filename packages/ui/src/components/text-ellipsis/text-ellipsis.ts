import type { Placement, PopperEffect } from 'element-plus/es/components/popper'

export interface ITextEllipsisProps {
    type?: 'single'
    effect?: PopperEffect
    placement?: Placement
    content?: string
    popperOptions?: object
    popperClass?: string
    enterable?: boolean
    maxWidth?: number
    showTooltip?: boolean
}
