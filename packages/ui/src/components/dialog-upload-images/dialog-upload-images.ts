import type { PropType } from 'vue'

export interface IUploadFile {
    url: string
    size: number
    type: string
    name: string
}

export default {
    modelValue: { type: Array as PropType<(File | IUploadFile)[]>, default: () => [] },
    visible: { type: Boolean, required: true },

    // 同dialog
    destroyOnClose: { type: Boolean, default: false },
    limit: { type: Number, default: 5 },

    // 图片大小限制，默认最大2M
    maxSize: { type: Number, default: 2 * 1024 * 1024 },

    // 自定义上传
    httpRequest: { type: Function as PropType<(file: File) => Promise<IUploadFile | File | void>>, required: true, default: () => { } },

    // 上传前回调，return false中止上传
    beforeUpload: { type: Function as PropType<(file: File) => boolean>, default: () => true },

    // 删除前回调，return false中止上传
    beforeRemove: { type: Function as PropType<(file: File | IUploadFile, fileList: (File | IUploadFile)[]) => boolean>, default: () => true },
}

export interface IDialogUploadImagesProps {
    modelValue: (File | IUploadFile)[]
    visible: boolean
    destroyOnClose?: boolean
    limit?: number
    maxSize?: number
    httpRequest: (file: File) => Promise<IUploadFile | File | void>
    beforeUpload?: (file: File) => boolean
    beforeRemove?: (file: File | IUploadFile, fileList: (File | IUploadFile)[]) => boolean
}
