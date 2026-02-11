<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'padding-top', description: '顶部间距', type: 'number', defaultValue: '8' },
        { param: 'layout', description: '分页布局', type: 'string', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: 'total, prev, pager, next' },
        { param: 'total', description: '总条数，非数字则不展示分页', type: 'number', defaultValue: '-' },
        { param: '其他', description: 'el-pagination 的属性、事件', type: 'https://element-plus.org/zh-CN/component/pagination#api' },
    ],
    slots: [
        { name: 'default', description: '左侧区域' },
    ],
}
</script>
