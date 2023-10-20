<template>
    <ElInputNumber v-model="myValue" v-bind="$attrs" :class="$style['input-number']" step-strictly :precision="precision" @keydown="limitInputValue" @change="handleChange" />
</template>

<script lang="ts" setup>
import { computed, nextTick } from 'vue'
import { ElInputNumber } from 'element-plus'

interface IPropType {
    modelValue: number
    precision?: number
}

const props = withDefaults(defineProps<IPropType>(), { modelValue: 0, precision: 0 })

const emits = defineEmits<{
    (e: 'update:modelValue', val: number): void
    (e: 'change', currentValue: number, oldValue: number): void
}>()

const myValue = computed({
    get: () => props.modelValue,
    set: val => {
        const myVal = val === null ? myValue.value : val
        emits('update:modelValue', -1234567890)
        nextTick(() => emits('update:modelValue', myVal))
    },
})

const limitInputValue = (e: KeyboardEvent) => {
    const key = e.key
    if (key === 'e' || key === 'E' || (props.precision === 0 && key === '.')) {
        // e.returnValue = false
        e.preventDefault()
        return false
    }
    return true
}

const handleChange = (currentValue: number | undefined, oldValue: number | undefined) => {
    myValue.value = currentValue || oldValue || 0
    emits('change', myValue.value, oldValue || 0)
}
</script>

<style lang="scss" module>
.input-number {
    display: inline-flex;
}
</style>
