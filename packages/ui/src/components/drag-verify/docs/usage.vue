<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'type', description: '类型', type: 'text', defaultValue: 'text' },
        { param: 'v-model:success', description: '操作结果', type: 'boolean', defaultValue: 'false' },
        { param: 'width', description: '宽度', type: 'number', defaultValue: '300' },
        { param: 'height', description: '高度', type: 'number', defaultValue: '40' },
        { param: 'stopToCheck', description: '停止时进行验证', type: 'boolean', defaultValue: 'false' },
        { param: 'background', description: '[主题背景，左侧背景, 左侧成功背景]', type: 'string[]', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '[\'#f5f5f5\', \'#d9d9d9\', \'#76c61d\']' },
        { param: 'circle', description: '文本：是否为圆形', type: 'boolean', defaultValue: 'false' },
        { param: 'radius', description: '圆角大小', type: 'number', defaultValue: '4' },
        { param: 'text', description: '提示文字', type: 'string', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '拖动滑块完成验证' },
        { param: 'successText', description: '验证成功文字', type: 'string', defaultValue: '验证成功' },
        { param: 'textColor', description: '文本颜色', type: 'string', defaultValue: '#333' },
        { param: 'diffWidth', description: '图像：验证误差宽度', type: 'number', defaultValue: '20' },
        { param: 'refresh', description: '图像：是否显示刷新按钮', type: 'boolean', defaultValue: 'false' },
        { param: 'tips', description: '图像：是否显示提示信息', type: 'boolean', defaultValue: 'false' },
        { param: 'successTips', description: '图像：成功的 tips', type: 'string', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '验证通过，超过89.7%用户' },
        { param: 'failedTips', description: '图像：失败的 tips', type: 'string', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '验证未通过，拖动滑块将悬浮图像正确合并' },
    ],
    events: [
        { name: 'fail', description: '验证失败的回调', param: '-' },
        { name: 'success', description: '验证成功的回调', param: '-' },
    ],
}
</script>
