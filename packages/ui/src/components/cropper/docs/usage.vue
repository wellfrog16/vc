<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'dialog', description: '是否对话框模式', type: 'boolean', defaultValue: 'false' },
        { param: 'visible', description: '对话框模式时的显示/隐藏', type: 'boolean', defaultValue: 'false' },
        { param: 'image*', description: '需要处理的图片', type: '下一行', defaultValue: '-' },
        { param: '-', rowType: 'paramType', description: 'HTMLImageElement | String | File' },
        { param: 'imageSmoothingQuality', description: '切片质量', type: '"low" | "medium" | "high"', defaultValue: 'high' },
        { param: 'containerWidth', description: '对话框宽', type: 'string', defaultValue: '600px' },
        { param: 'containerHeight', description: '对话框高', type: 'string', defaultValue: '450px' },
        { param: 'cropperWidth', description: '裁剪框宽', type: 'number', defaultValue: '400' },
        { param: 'cropperHeight', description: '裁剪框高', type: 'number', defaultValue: '300' },
        { param: 'option', description: 'cropperjs 的 options', type: 'https://github.com/fengyuanchen/cropperjs#options', defaultValue: '-' },
    ],
    events: [
        { name: 'init', description: '初始化完成的回调', param: 'options' },
        { name: 'cancel', description: '对话框模式时，取消事件', param: '-' },
        { name: 'finished', description: '对话框模式时，完成事件', param: 'canvas, blob' },
    ],
    methods: [
        { name: 'instance', description: '获取 cropper 实例', param: '() => ICropper' },
        { name: 'getCroppedCanvas', description: '获取裁剪后的 canvas', param: '() => HTMLCanvasElement | undefined' },
        { name: 'getBlobData', description: '获取裁剪后的 Blob 数据', param: '() => Blob | undefined' },
    ],
}
</script>
