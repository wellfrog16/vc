<template>
    <ElInput v-if="visible" v-model="myValue" v-thousand="option" v-bind="$attrs" :class="$style.main" @change="handleChange">
        <template v-if="$slots.prepend" #prepend><slot name="prepend" /></template>
    </ElInput>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import { ElInput } from 'element-plus'
import { isEqual } from 'lodash-es'
import vThousand from '@/directives/thousand'

const props = defineProps({
    modelValue: { type: String, default: '' },
    formatValue: { type: String, default: '' },
    option: { type: Object, default: () => ({ decimalScale: 2, integerScale: 12 }) },
})

const emit = defineEmits(['update:modelValue', 'update:formatValue', 'change'])

const fixValue = (val: string) => {
    let myVal = val
        .replace(/[^\d\.]/g, '') // 只保留数字和.
        .replace(/^0(\d\.)+/, '$1') // 删除开头的0
        .replace(/^\./, '') // 删除开头的.
        .replace(/\.{1,}/g, '.') // 替换多个.为一个.
    const arrayVal = myVal.split('.')
    if (arrayVal.length > 1) {
        const [integer, decimal] = arrayVal
        myVal = `${integer}.${decimal}`
    }
    return myVal
}

const visible = ref(true)
const myOption = computed(() => props.option)
watch(myOption, (val1, val2) => {
    if (isEqual(val1, val2)) { return }
    visible.value = false
    nextTick(() => {
        visible.value = true
    })
})

const myValue = computed({
    get: () => {
        const { modelValue } = props
        const prefix = props.option.prefix || ''
        if (modelValue === '') {
            emit('update:formatValue', prefix)
            return prefix
        }

        const dot = (modelValue).toString().charAt(modelValue.length - 1) === '.' ? '.' : ''
        const myVal = prefix + (+fixValue(props.modelValue)).toLocaleString('en-US') + dot
        emit('update:formatValue', myVal)
        return myVal
    },
    set: val => {
        emit('update:modelValue', fixValue(val))
    },
})

const handleChange = (val: string) => {
    const myVal = fixValue(val).replace(/\.$/, '')
    myValue.value = myVal
    emit('change', myVal, val.replace(/\.$/, ''))
}
</script>

<style lang="scss" module>
.main {
    :global {
        .el-input__wrapper input {
            text-align: right;
        }
    }
}
</style>
