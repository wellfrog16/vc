<template>
    <ElInput ref="inputRef" :class="className" :clearable="clearable">
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
import { formatToPx } from '@/utils'

const props = withDefaults(defineProps<IInputProps>(), {
    clearable: true,
})

const $style = useCssModule()
const inputRef = useTemplateRef('inputRef')

const className = computed(() => ({
    [$style['input-width']]: !!props.width,
}))
const myWidth = computed(() => props.width ? formatToPx(props.width) : 'auto')

defineExpose({ inputRef })
</script>

<style lang="scss" module>
div.input-width {
    width: v-bind(myWidth);
}
</style>
