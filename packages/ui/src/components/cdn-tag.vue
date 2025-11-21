<template>
    <div :class="$style['cdn-tag']" :title="`该组件在被使用时，需要引用 ${mapping[name]} 的 cdn 资源作为依赖`">CDN</div>
</template>

<script setup lang="ts">
interface IPropType {
    name: string
}

defineProps<IPropType>()
const mapping: Record<string, string> = {
    currency: 'currency',
    tinymce: 'tinymce',
    fontawesome: 'font-awesome',
    flagicons: 'flag-icons',
    cropperjs: 'cropperjs',
    qrcode: 'qrcode',
    screenfull: 'screenfull',
}
</script>

<style lang="scss" module>
.cdn-tag {
    display: inline-block;
    padding: 2px;
    margin-right: 8px;
    font-size: 10px;
    line-height: 1;
    color: var(--el-color-warning);
    cursor: default;
    background-color: var(--el-color-warning-light-9);
    border: 1px solid var(--el-color-warning);
    transform: translateY(-1px);
}
</style>
