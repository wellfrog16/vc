<template>
    <ElRadioGroup v-if="!props.multiple" v-bind="$attrs" :type="myType" :options="myOptions" :disabled="formDisabled" @change="handleChange" />
    <ElCheckboxGroup v-else v-bind="$attrs" :class="$style.checkbox" :type="myType" :options="myOptions" :disabled="formDisabled" @change="handleChange" />
</template>

<script lang="ts" setup>
import type { IChoiceEmits, IChoiceProps } from './choice'
import { useFormDisabled, useFormItem } from 'element-plus'

const props = withDefaults(defineProps<IChoiceProps>(), {
    type: 'button',
    disabled: undefined,
})
const emits = defineEmits<IChoiceEmits>()

const formDisabled = useFormDisabled()
const { formItem } = useFormItem()
const myType = props.type as any // 解决类型报红
const myOptions = computed<any>(() => {
    if (Array.isArray(props.options) && typeof props.options[0] === 'string') {
        return props.options.map(item => ({ label: item, value: item }))
    }
    return props.options
})

function handleChange(value: any) {
    formItem?.validate?.('change').catch(() => {})
    emits('change', value)
}
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
