import type { Placement, PopperEffect } from 'element-plus/es/components/popper'

export interface IImageProps {
    type?: 'image' | 'text'
    text?: string
    src?: string
    previewSrcList?: string[]
    width?: string
    height?: string
    fit?: IGlobal.ImageFit
    textMaxWidth?: number

    // tooltip的参数
    showTooltip?: boolean
    effect?: PopperEffect
    placement?: Placement
    popperClass?: string
    enterable?: boolean
}
