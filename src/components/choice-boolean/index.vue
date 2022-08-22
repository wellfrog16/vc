<template>
    <HChoice v-model="myValue" :options="data" v-bind="$attrs" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import HChoice from '../choice/index.vue'
import type { PropType } from 'vue'

const props = defineProps({
    modelValue: { type: Boolean, default: false },
    text: { type: Array as PropType<string []>, default: () => ['是', '否'] },
})
const emit = defineEmits(['update:modelValue'])

const [textTrue, textFalse] = props.text
const data = [
    { label: textTrue, value: true },
    { label: textFalse, value: false },
]

const myValue = computed({
    get: () => props.modelValue,
    set: val => emit('update:modelValue', val),
})
</script>
