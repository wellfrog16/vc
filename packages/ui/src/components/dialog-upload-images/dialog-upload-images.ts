export interface IUploadFile {
    url: string
    size: number
    type: string
    name: string
}

export interface IDialogUploadImagesProps {
    modelValue: (File | IUploadFile)[]
    visible: boolean
    destroyOnClose?: boolean // 同dialog
    limit?: number
    maxSize?: number // 图片大小限制，默认最大2M
    httpRequest: (file: File) => Promise<IUploadFile | File | void> // 自定义上传
    beforeUpload?: (file: File) => boolean // 上传前回调，return false 中止上传
    beforeRemove?: (file: File | IUploadFile, fileList: (File | IUploadFile)[]) => boolean // 删除前回调，return false 中止上传
}
