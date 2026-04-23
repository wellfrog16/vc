<template>
    <ElSelect collapse-tags v-bind="$attrs" :class="className" :options="myOptions" :disabled="formDisabled" @change="handleChange" @blur="handleBlur" />
</template>

<script lang="ts" setup>
import type { SelectProps } from 'element-plus'
import type { ISelectEmits, ISelectProps } from './select'
import { useFormDisabled, useFormItem } from 'element-plus'
import { formatToPx } from '@/utils'

const props = withDefaults(defineProps<ISelectProps>(), {
    width: '',
    disabled: undefined,
})
const emits = defineEmits<ISelectEmits>()

const formDisabled = useFormDisabled()
const { formItem } = useFormItem()

function handleChange(value: any) {
    formItem?.validate?.('change').catch(() => {})
    emits('change', value)
}

function handleBlur(evt: FocusEvent) {
    formItem?.validate?.('blur').catch(() => {})
    emits('blur', evt)
}

const myOptions = computed(() => {
    if (Array.isArray(props.options) && typeof props.options[0] === 'string') {
        return props.options.map(item => ({ label: item, value: item }))
    }
    return props.options as SelectProps['options']
})

const $style = useCssModule()
const className = computed(() => ({
    [$style['select-width']]: !!props.width,
}))
const myWidth = computed(() => props.width ? formatToPx(props.width) : 'auto')
</script>

<style lang="scss" module>
div.select-width {
    width: v-bind(myWidth);
}
</style>
