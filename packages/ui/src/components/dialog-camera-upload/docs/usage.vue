<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*v-model:visible', description: '显示/隐藏', type: 'boolen', defaultValue: 'false' },
        { param: 'type', description: '拍照上传模式', type: '(\'upload\' | \'camera\')[]', defaultValue: '[\'upload\', \'camera\']' },
        { param: 'width', description: '主窗口宽度', type: 'number', defaultValue: '600' },
        { param: 'height', description: '主窗口高度', type: 'number', defaultValue: '400' },
        { param: 'fixWidth', description: '修正宽度，用于计算 dialog 宽度', type: 'number', defaultValue: '40' },
        { param: 'accept', description: '上传运行的类型', type: 'string', defaultValue: '.jpg,.jpeg,.png' },
        { param: 'cropper', description: '上传前是否裁剪图片', type: 'boolean', defaultValue: 'false' },
        { param: 'cropper-option', description: 'cropperjs 的 options', type: 'https://github.com/fengyuanchen/cropperjs#options', defaultValue: '-' },

    ],
    events: [
        { name: 'close', description: '对话框关闭的回调', param: '-' },
        { name: 'error', description: '预上传错误回调', param: '错误文本' },
        { name: 'save', description: '保存的回调', param: 'file: 处理好的文件, localUrl: 本地预览地址' },
    ],
}
</script>
