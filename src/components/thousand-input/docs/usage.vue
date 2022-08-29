<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'string', defaultValue: '' },
        { param: 'option', description: '指令 v-thoursand 参数，默认值：{ decimalScale: 2, integerScale: 12 }', type: 'IThousand', defaultValue: ' - ' },
        { param: '其他', description: 'el-input 属性', type: 'https://element-plus.gitee.io/zh-CN/component/input.html#input-%E5%B1%9E%E6%80%A7', defaultValue: '-' },
    ],
    types: [
        { param: 'IThousand', description: '{ decimalScale: 小数位长度, integerScale: 整数位长度 }' },
    ],
}
</script>
