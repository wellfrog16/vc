<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'button', description: 'button 组件的 confirm 和 confirmInfo 参数', type: './button.html#api', defaultValue: '-' },
        { param: 'pca-base-url', description: 'pca 数据源的 base url', type: 'string', defaultValue: '-' },
        { param: 'cros-proxy', description: '跨域请求的代理地址', type: 'string', defaultValue: '-' },
        { param: 'local-cdn', description: '本地 cdn 路径', type: 'string', defaultValue: '-' },
    ],
}
</script>
