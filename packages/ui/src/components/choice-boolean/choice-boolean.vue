<template>
    <HChoice v-model="myValue" :options="data" v-bind="$attrs" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import HChoice from '../choice/choice.vue'

interface IPropType {
    modelValue: boolean | boolean[]
    text?: [string, string]
}

const props = withDefaults(defineProps<IPropType>(), {
    modelValue: false,
    text: () => ['是', '否'],
})
const emits = defineEmits(['update:modelValue'])

const [textTrue, textFalse] = props.text
const data = [
    { label: textTrue, value: true },
    { label: textFalse, value: false },
]

const myValue = computed({
    get: () => props.modelValue,
    set: val => emits('update:modelValue', val),
})
</script>
