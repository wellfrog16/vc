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

const fixValue = (val: string) => {
    let myVal = val
        .replace(/[^\d\.]/g, '') // 只保留数字和.
        .replace(/^0+/, '') // 删除开头的0
        .replace(/^\./, '') // 删除开头的.
        .replace(/\.{1,}/g, '.') // 替换多个.为一个.
    const arrayVal = myVal.split('.')
    if (arrayVal.length > 1) {
        const [integer, decimal] = arrayVal
        myVal = `${integer}.${decimal}`
    }
    return myVal
}

const myValue = computed({
    get: () => {
        // console.log('get', props.modelValue)
        const { modelValue } = props
        if (modelValue === '') { return '' }

        const dot = (modelValue).toString().charAt(modelValue.length - 1) === '.' ? '.' : ''
        return (+fixValue(props.modelValue)).toLocaleString('en-US') + dot
    },
    set: val => {
        // console.log('set', val)
        emit('update:modelValue', fixValue(val))
    },
})

const handleChange = (val: string) => {
    // console.log('change', val)
    const myVal = fixValue(val).replace(/\.$/, '')
    myValue.value = myVal
    emit('change', myVal)
}
</script>
