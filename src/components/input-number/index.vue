<template>
    <ElInputNumber v-model="myValue" v-bind="$attrs" :class="$style['input-number']" step-strictly :precision="0" @keydown="limitInputValue" @change="handleChange" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ElInputNumber } from 'element-plus'

interface IPropType {
    modelValue: number
}

const props = withDefaults(defineProps<IPropType>(), { modelValue: 0 })

// const emits = defineEmits(['update:modelValue', 'change'])
const emits = defineEmits<{
    (e: 'update:modelValue', val: number): void
    (e: 'change', currentValue: number, oldValue: number): void
}>()

const myValue = computed({
    get: () => props.modelValue,
    set: val => emits('update:modelValue', val),
})

const limitInputValue = (e: KeyboardEvent) => {
    const key = e.key
    if (key === 'e' || key === 'E') {
        e.returnValue = false
        e.preventDefault()
        return false
    }
    return true
}

const handleChange = (currentValue: number | undefined, oldValue: number | undefined) => {
    if (currentValue === null) {
        myValue.value = oldValue || 0
    }
    emits('change', myValue.value, oldValue || 0)
}
</script>

<style lang="scss" module>
.input-number {
    display: inline-flex;
}
</style>
