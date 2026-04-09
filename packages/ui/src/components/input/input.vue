<template>
    <ElInput ref="inputRef" :class="className" :disabled="formDisabled" :clearable="clearable" @blur="handleBlur" @change="handleChange">
        <!-- 这样没有类型提示 -->
        <!-- <template v-for="(_, name) in $slots" :key="name" #[name]>
            <slot :name="name" />
        </template> -->
        <template v-if="$slots.prefix" #prefix><slot name="prefix" /></template>
        <template v-if="$slots.suffix" #suffix><slot name="suffix" /></template>
        <template v-if="$slots.prepend" #prepend><slot name="prepend" /></template>
        <template v-if="$slots.append" #append><slot name="append" /></template>
    </ElInput>
</template>

<script lang="ts" setup>
import type { IInputEmits, IInputProps } from './input'
import { useFormDisabled, useFormItem } from 'element-plus'

const props = withDefaults(defineProps<IInputProps>(), {
    block: false,
    disabled: undefined,
    clearable: true,
})
const emits = defineEmits<IInputEmits>()

const $style = useCssModule()
const inputRef = useTemplateRef('inputRef')
const formDisabled = useFormDisabled()
const { formItem } = useFormItem()

const className = computed(() => ({
    [$style.input]: true,
    [$style.block]: props.block,
}))

const myWidth = computed(() => {
    return props.width || (props.block ? '100%' : '240px')
})

function handleBlur(evt: FocusEvent) {
    formItem?.validate?.('blur').catch(() => {})
    emits('blur', evt)
}
function handleChange(value: string, evt?: Event) {
    formItem?.validate?.('change').catch(() => {})
    emits('change', value, evt)
}

defineExpose({ inputRef })
</script>

<style lang="scss" module>
div.input {
    width: v-bind(myWidth);
    display: inline-flex;

    &.block {
        display: flex;
    }
}
</style>
