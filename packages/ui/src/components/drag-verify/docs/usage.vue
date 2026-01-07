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
        { param: 'background', description: '[主题背景，左侧背景, 左侧成功背景]', type: 'string[]', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '[\'#f5f5f5\', \'#d9d9d9\', \'#76c61d\']' },
        { param: 'circle', description: '是否为圆形', type: 'boolean', defaultValue: 'false' },
        { param: 'radius', description: '圆角大小', type: 'number', defaultValue: '4' },
        { param: 'text', description: '提示文字', type: 'string', defaultValue: '拖动滑块完成验证' },
        { param: 'successText', description: '验证成功文字', type: 'string', defaultValue: '验证成功' },
        { param: 'textColor', description: '文本颜色', type: 'string', defaultValue: '#333' },
    ],
    events: [
        { name: 'fail', description: '验证失败的回调', param: '-' },
        { name: 'success', description: '验证成功的回调', param: '-' },
    ],
}
</script>
