import type ICropper from 'cropperjs'
import type { ButtonProps } from 'element-plus/es/components/button/src/button'
import type { PropType } from 'vue'

export interface IImageOptions {
    width: string // 组件宽
    height: string // 组件高
    src: string // 图片地址
    fit: IGlobal.ImageFit // 图片显示风格
    icon: string // 默认icon
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
    icon: string // 默认icon
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

export default {
    // 接受的文件格式
    accept: { type: String, default: '.jpg,.jpeg,.png' },

    // 显示类型，image | button
    type: { type: String as PropType<'image' | 'button'>, default: 'image' },

    // 类型是image时的option
    imageOptions: {
        type: Object as PropType<Partial<IImageOptions>>,
        default: () => imageOptions,
    },

    // 类型是button时的option
    buttonOptions: {
        type: Object as PropType<Partial<IButtonOptions>>,
        default: () => buttonOptions,
    },

    // 图片大小限制，默认最大2M
    maxSize: { type: Number, default: 2 * 1024 * 1024 },

    // 自定义上传
    httpRequest: { type: Function as PropType<(file: File, done: () => void, localUrl: string) => void> },

    // 上传前回调，return false中止上传
    beforeUpload: { type: Function as PropType<(file: File) => boolean> },

    cropper: { type: Boolean, default: false },
    cropperOption: { type: Object as PropType<ICropper.Options>, default: () => { } },
}
