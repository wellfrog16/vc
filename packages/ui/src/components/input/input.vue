<template>
    <ElInput ref="inputRef" :class="className" :disabled="formDisabled">
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
import type { IInputProps } from './input'
import { useFormDisabled } from 'element-plus'

const props = withDefaults(defineProps<IInputProps>(), {
    block: false,
    disabled: undefined,
})
const $style = useCssModule()
const inputRef = useTemplateRef('inputRef')
const formDisabled = useFormDisabled()

const className = computed(() => ({
    [$style.input]: true,
    [$style.block]: props.block,
}))

const myWidth = computed(() => {
    return props.width || (props.block ? '100%' : '240px')
})

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
