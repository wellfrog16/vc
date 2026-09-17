<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*v-model', description: '绑定值；字符串仅接受合法十进制数字，否则视为空', type: 'string | number | null', defaultValue: '-' },
        { param: 'controls', description: '是否显示控制按钮', type: 'boolean', defaultValue: 'false' },
        { param: '其他', description: 'vc-input-number 的属性、事件', type: './vc-input-number.html#api', defaultValue: '-' },
    ],
    events: [
        { name: 'update:modelValue', description: '绑定值变化时触发；空值或非法输入返回 undefined', param: 'number | undefined' },
    ],
    slots: [
        { name: 'prefix', description: '输入框前缀内容' },
        { name: 'suffix', description: '输入框后缀内容' },
    ],
}
</script>
