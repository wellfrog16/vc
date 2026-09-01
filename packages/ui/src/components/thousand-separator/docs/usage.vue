<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*value', description: '要格式化的数值（数字或数字字符串），为 null / undefined / 空字符串时显示 placeholder', type: 'string | number | null', defaultValue: 'null' },
        { param: 'separator', description: '千分位分隔符', type: 'string', defaultValue: ',' },
        { param: 'decimal-places', description: '保留小数位数：>0 四舍五入并补齐位数；0 不显示小数部分；-1 保留原样', type: 'number', defaultValue: '2' },
        { param: 'placeholder', description: '空值时显示的占位符', type: 'string', defaultValue: '-' },
    ],
}
</script>
