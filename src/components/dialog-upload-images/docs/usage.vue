<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'v-model', description: '绑定值', type: 'File[] | IFile[]', defaultValue: '[]' },
        { param: 'v-model:visible', description: '显示/隐藏', type: 'boolen', defaultValue: 'false' },
        { param: '*http-request', description: '自定义上传', type: '下一行', defaultValue: '() => {}' },
        { param: '-', rowType: 'paramType', description: '(file: File) => Promise<IUploadFile | File | void>' },
        { param: 'destroyOnClose', description: '对话框关闭时注销内容', type: 'boolen', defaultValue: 'false' },
        { param: 'max-size', description: '文件大小限制', type: 'number', defaultValue: '2 * 1024 * 1024' },
        { param: 'limit', description: '最大允许上传个数', type: 'number', defaultValue: '5' },
        { param: 'before-upload', description: '上传前回调，return false 中止上传', type: '下一行', defaultValue: '()=>true' },
        { param: '-', rowType: 'paramType', description: '(file: File) => boolean' },
        { param: 'before-remove', description: '删除前回调，return false 中止删除，用于先接口删除，再展示删除', type: '下一行', defaultValue: '()=>true' },
        { param: '-', rowType: 'paramType', description: '(file: File | IUploadFile, fileList: (File | IUploadFile)[]) => boolean' },
    ],
    types: [
        { param: 'IUploadFile', description: '{ url: string; size: number; type: string; name: string}' },
    ],
    events: [
        { name: 'error', description: '不符合文件大小限制的回调', param: '错误文本' },
    ],
}
</script>
