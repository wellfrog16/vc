<template>
    <HChoice v-model="myValue" :options="data" v-bind="$attrs" />
</template>

<script lang="ts" setup>
import type { IChoiceBooleanProps } from './choice-boolean'

import { useVModel } from '@vueuse/core'
import { computed } from 'vue'

import HChoice from '../choice/choice.vue'

const props = withDefaults(defineProps<IChoiceBooleanProps>(), {
    text: () => ['是', '否'],
    valueType: 'boolean',
})
const emits = defineEmits(['update:modelValue'])
const myValue = useVModel(props, 'modelValue', emits)

const [textTrue, textFalse] = props.text
const data = computed(() => ([
    { label: textTrue, value: props.valueType === 'boolean' ? true : 1 },
    { label: textFalse, value: props.valueType === 'boolean' ? false : 0 },
]))
</script>
