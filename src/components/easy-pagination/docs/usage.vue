<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*current-page', description: '当前页数，用于判断是否有上一页和发送下一页的页数', type: 'number', defaultValue: '1' },
        { param: '*have-next', description: '是否有下一页，一般判断返回的数据是否小于分页的pagesize', type: 'boolen', defaultValue: 'false' },
        { param: 'prev-text', description: '上一页文本', type: 'string', defaultValue: '上一页' },
        { param: 'next-text', description: '下一页文本', type: 'string', defaultValue: '下一页' },
        { param: 'size', description: '按钮组件大小', type: 'small | large', defaultValue: 'small' },
    ],
    events: [
        { name: 'current-change', description: '页面切换时触发，通常用来触发加载新数据', param: '更新后的 current-page 值' },
        { name: 'prev-click', description: '点击上一页时触发', param: '更新后的 current-page 值' },
        { name: 'next-click', description: '点击下一页时触发', param: '更新后的 current-page 值' },
    ],
}
</script>
