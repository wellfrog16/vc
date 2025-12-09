import type ICropper from 'cropperjs'

export const TYPE_UPLOAD = 'upload'
export const TYPE_CAMERA = 'camera'
export const WINDOW_IMAGE = 'image'
export const WINDOW_VIDEO = 'video'
export const WINDOW_CANVAS = 'canvas'
export const WINDOW_PLACEHOLDER = 'placeholder'

export interface IDialogCameraUploadProps {
    visible: boolean
    type?: ('upload' | 'camera')[]
    width?: number
    fixWidth?: number
    height?: number
    accept?: string
    cropper?: boolean
    cropperOption?: ICropper.Options
}
