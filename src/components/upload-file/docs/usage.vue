<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'accept', description: '接受的文件格式', type: 'string', defaultValue: '下一行' },
        { param: '-', rowType: 'defaultValue', description: '.jpg,.jpeg,.png' },
        { param: 'type', description: '上传操作的展示方式', type: 'image | button', defaultValue: 'image' },
        { param: 'image-options', description: 'image 展示方式的 option', type: 'ImageOptions', defaultValue: '下一行' },
        { param: '-', rowType: 'defaultValue', description: '{ width: \'200px\', height: \'100px\', src: \'\', fit: \'cover\', icon: \'Plus\', iconSize: 30 }' },
        { param: 'button-options', description: 'button 展示方式的 option', type: 'ButtonOptions', defaultValue: '下一行' },
        { param: '-', rowType: 'defaultValue', description: '{ icon: \'Upload\', type: \'primary\', size: \'\', text: \'上传图片\'}' },
        { param: 'max-size', description: '文件大小限制', type: 'number', defaultValue: '2 * 1024 * 1024' },
        { param: 'http-request', description: '自定义上传', type: '(file: File, done: () => void, localUrl: string) => void', defaultValue: '-' },
        { param: 'before-upload', description: '上传前回调，return false中止上传', type: '(file: File) => boolean', defaultValue: '-' },
        { param: 'cropper', description: '上传前是否裁剪图片', type: 'boolean', defaultValue: 'false' },
        { param: 'cropper-option', description: 'cropperjs 的 options', type: 'https://github.com/fengyuanchen/cropperjs#options', defaultValue: '-' },
    ],
    types: [
        { param: 'ImageOptions', description: '{ width: string, height: string, src: string, fit: object-fit, icon: string, iconSize: number }' },
        { param: 'ButtonOptions', description: '{ icon: string, type: ButtonType, size: string, text: string}' },
        { param: 'File', description: '标准File类型的数据' },
        { param: 'done: () => void', description: '上传完成时调用的回调，用于关闭 loading，显示图片' },
        { param: 'localUrl: string', description: '本地的 blob 地址' },
    ],
    events: [
        { name: 'error', description: '不符合文件大小限制的回调', param: '错误文本' },
    ],
    slot: [
        { name: 'default', description: '当 type 为 button 时，使用插槽的内容作为上传控件' },
    ],
}
</script>
