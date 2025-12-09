import type ICropper from 'cropperjs'

export interface ICropperProps {
    dialog?: boolean
    visible?: boolean
    image?: HTMLImageElement | string | File
    option?: ICropper.Options
    imageSmoothingQuality?: ICropper.ImageSmoothingQuality
    containerWidth?: string
    containerHeight?: string
    cropperWidth?: number
    cropperHeight?: number
}
