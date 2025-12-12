<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'tag', description: '展示的嵌入方式', type: 'canvas | img | svg', defaultValue: 'canvas' },
        { param: 'value', description: '二维码的数据', type: 'string', defaultValue: '' },
        { param: 'width', description: '宽度', type: 'number', defaultValue: '-' },
        { param: 'height', description: '高度', type: 'number', defaultValue: '-' },
        { param: 'margin', description: '二维码外侧留白', type: 'number', defaultValue: '1' },
        { param: 'option', description: '二维码配置参数', type: 'https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/qrcode/index.d.ts', defaultValue: '{}' },
        { param: 'version', description: 'cdn 版本，用于常规 cdn 无 1.5.1 版本的情况', type: 'string', defaultValue: '' },
    ],
}
</script>
