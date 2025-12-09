import type ICropper from 'cropperjs'

import { ref } from 'vue'

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

export function useVideosList() {
    const cameras = ref<MediaDeviceInfo[]>([])
    const getVideosList = async () => {
        const temp = await navigator.mediaDevices.getUserMedia({ video: true })
        temp.getTracks().forEach(t => t.stop()) // 立即释放

        const devs = await navigator.mediaDevices.enumerateDevices()
        cameras.value = devs.filter(d => d.deviceId && d.kind === 'videoinput')
    }
    return { cameras, getVideosList }
}
