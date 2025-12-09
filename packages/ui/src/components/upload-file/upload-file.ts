import type ICropper from 'cropperjs'
import type { ButtonProps } from 'element-plus/es/components/button/src/button'
import type { IElIconProps } from '../el-icon/el-icon'

export interface IImageOptions {
    width: string // 组件宽
    height: string // 组件高
    src: string // 图片地址
    fit: IGlobal.ImageFit // 图片显示风格
    icon: IElIconProps['name'] // 默认icon
    iconSize: number // icon的fontsize
}

export const imageOptions: IImageOptions = {
    width: '200px',
    height: '100px',
    src: '',
    fit: 'contain',
    icon: 'Plus',
    iconSize: 30,
}

export interface IButtonOptions {
    icon: IElIconProps['name'] // 默认icon
    type: ButtonProps['type']
    size: string // 按钮尺寸
    text: string
}

export const buttonOptions: IButtonOptions = {
    icon: 'Upload', // 默认icon
    type: 'primary',
    size: '', // 按钮尺寸
    text: '上传图片',

}

export interface IUploadFileProps {
    accept?: string
    type?: 'image' | 'button'
    imageOptions?: Partial<IImageOptions>
    buttonOptions?: Partial<IButtonOptions>
    maxSize?: number
    httpRequest: (file: File, done: () => void, localUrl: string) => void
    beforeUpload?: (file: File) => boolean
    cropper?: boolean
    cropperOption?: ICropper.Options
}

export const defaultProps = {
    accept: '.jpg,.jpeg,.png',
    type: 'image',
    imageOptions: () => imageOptions,
    buttonOptions: () => buttonOptions,
    maxSize: 2 * 1024 * 1024,
    cropper: false,
    cropperOption: () => ({}),
}
