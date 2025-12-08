<template>
    <ElRadioGroup v-if="!props.multiple" v-bind="$attrs" :type="myType" :options="myOptions" />
    <ElCheckboxGroup v-else v-bind="$attrs" :class="$style.checkbox" :type="myType" :options="myOptions" />
</template>

<script lang="ts" setup>
import type { IChoiceProps } from './choice'
import { ElCheckboxGroup, ElRadioGroup } from 'element-plus'
import { computed } from 'vue'

const props = withDefaults(defineProps<IChoiceProps>(), {
    type: 'button',
})

const myType = props.type as any // 解决类型报红
const myOptions = computed(() => {
    if (Array.isArray(props.options) && typeof props.options[0] === 'string') {
        return props.options.map(item => ({ label: item, value: item }))
    }
    return props.options
})
</script>

<style lang="scss" module>
.checkbox {
    display: inline-flex;

    // 统一checkbox和radio的样式
    :global(.el-checkbox-button__inner) {
        border-left: 0;
    }
}
</style>
