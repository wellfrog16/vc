<template>
    <ElInput v-model="myValue" v-thousand="option" v-bind="$attrs" @change="handleChange" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ElInput } from 'element-plus'
import vThousand from '@/directives/thousand'

const props = defineProps({
    modelValue: { type: String, default: '' },
    option: { type: Object, default: () => ({ decimalScale: 2, integerScale: 12 }) },
})

const emit = defineEmits(['update:modelValue', 'change'])

const myValue = computed({
    get: () => {
        const { modelValue } = props
        if (modelValue === '') { return '' }

        const dot = (modelValue).toString().charAt(modelValue.length - 1) === '.' ? '.' : ''
        return (+props.modelValue).toLocaleString('en-US') + dot
    },
    set: val => {
        emit('update:modelValue', val.replace(/,/g, ''))
    },
})

const handleChange = (val: string) => {
    myValue.value = val
    emit('change', val.replace(/,/g, ''))
}
</script>
