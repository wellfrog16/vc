<template>
    <HInput v-if="visible" ref="elInput" v-model="myValue" v-thousand="option" v-bind="$attrs" :class="$style.main" @change="handleChange">
        <template v-if="$slots.prepend" #prepend><slot name="prepend" /></template>
        <template v-if="$slots.append" #append><slot name="append" /></template>
    </HInput>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import { isEqual } from 'lodash-es'
import HInput from '@/components/input/index.vue'
import vThousand from '@/directives/thousand'

const props = defineProps({
    modelValue: { type: String, default: '' },
    formatValue: { type: String, default: '' },
    option: { type: Object, default: () => ({ decimalScale: 2, integerScale: 12 }) },
    padDecimal: { type: Boolean, default: true },
})

const emit = defineEmits(['update:modelValue', 'update:formatValue', 'change'])

// 转换为纯数字
const fixValue = (val: string) => {
    if (val === '' || val === undefined) { return '' }
    let myVal = val
        .replace(/[^\d\.]/g, '') // 只保留数字和.
        .replace(/^0(\d{1,}\.?)+?/, '$1') // 删除开头的0
        .replace(/^\./, '') // 删除开头的.
        .replace(/\.{1,}/g, '.') // 替换多个.为一个.
    const arrayVal = myVal.split('.')
    if (arrayVal.length > 1) {
        const [integer, decimal] = arrayVal
        myVal = `${integer}.${decimal}`
    }
    return myVal
}

// 小数位补0
const padValue = (val: string) => {
    if (props.padDecimal && props.option.decimalScale > 0 && val !== props.option.prefix) {
        const [integer, decimal = ''] = val.split('.')
        return `${integer}.${decimal.padEnd(props.option.decimalScale, '0')}`
    }
    return val
}

// 转换为千分位等信息的数字
const formatValue = () => {
    const { modelValue } = props
    const prefix = props.option.prefix || ''
    if (modelValue === '') {
        emit('update:formatValue', prefix)
        return prefix
    }

    const dot = (modelValue).toString().charAt(modelValue.length - 1) === '.' ? '.' : ''
    const myVal = prefix + (+fixValue(props.modelValue)).toLocaleString('en-US') + dot
    const formatVal = padValue(myVal)
    emit('update:formatValue', formatVal)
    return myVal
}

const elInput = ref()

const myValue = computed({
    get: () => formatValue(),
    set: val => {
        emit('update:modelValue', fixValue(val))
    },
})

const handleChange = (val: string) => {
    const myVal = fixValue(val).replace(/\.$/, '')
    myValue.value = myVal
    emit('change', [myVal, padValue(val).replace(/\.$/, '')])
}

const visible = ref(true)

// 统一被监听的属性，当这些属性改变时，重新渲染组件
const observed = computed(() => ({ ...props.option, padDecimal: props.padDecimal }))

// 重新渲染组件
watch(observed, (val1, val2) => {
    if (isEqual(val1, val2)) { return }

    visible.value = false
    nextTick(() => {
        visible.value = true

        // 组件visible渲染完成
        // nextTick(() => {
        // 千分位格式化完成
        setTimeout(() => {
            // 修正小数点，如：有小数点的美元转换到无小数点的日元，需要删除小数位
            const inputInstance = elInput.value.instance()
            myValue.value = inputInstance.input?.value
            // 上一步赋值并渲染完成
            nextTick(() => {
                // 触发change事件，并重新格式化各个数据
                handleChange(formatValue())
            })
        }, 100)
        // })
    })
})
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
