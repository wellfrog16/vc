<template>
    <HInput v-if="visible" ref="inputRef" v-model="myValue" v-thousand="options" v-bind="$attrs" :class="$style.main" @change="handleChange">
        <template v-if="$slots.prepend" #prepend><slot name="prepend" /></template>
        <template v-if="$slots.append" #append><slot name="append" /></template>
    </HInput>
</template>

<script lang="ts" setup>
import type { IThousandInputProps } from './thousand-input'
import { isEqual } from 'lodash-es'
import vThousand from '@/directives/thousand'
import HInput from '../input/input.vue'

const props = withDefaults(defineProps<IThousandInputProps>(), {
    modelValue: '',
    formatValue: '',
    options: () => ({ decimalScale: 2, integerScale: 12 }),
    padDecimal: true,
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'update:formatValue', value: string): void
    (e: 'change', value: [string, string]): void
}>()

// 转换为纯数字
function fixValue(val: string) {
    if (val === '' || val === undefined) { return '' }
    let myVal = val
        .replace(/[^\d.]/g, '') // 只保留数字和.
        .replace(/^0+(?=\d)/, '') // 删除开头的0（若后面有数字）
        .replace(/^\./, '') // 删除开头的.
        .replace(/\.+/g, '.') // 替换多个.为一个.
    const arrayVal = myVal.split('.')
    if (arrayVal.length > 1) {
        const [integer, decimal] = arrayVal
        myVal = `${integer}.${decimal}`
    }
    return myVal
}

// 小数位补0
function padValue(val: string) {
    if (props.padDecimal && props.options.decimalScale > 0 && val !== props.options.prefix) {
        const [integer, decimal = ''] = val.split('.')
        return `${integer}.${decimal.padEnd(props.options.decimalScale, '0')}`
    }
    return val
}

// 转换为千分位等信息的数字
function formatValue() {
    const { modelValue } = props
    const prefix = props.options.prefix || ''
    if (modelValue === '') {
        emits('update:formatValue', prefix)
        return prefix
    }

    const dot = (modelValue).toString().charAt(modelValue.length - 1) === '.' ? '.' : ''
    const myVal = prefix + (+fixValue(props.modelValue)).toLocaleString('en-US') + dot
    const formatVal = padValue(myVal)
    emits('update:formatValue', formatVal)
    return myVal
}

const inputRef = useTemplateRef('inputRef')

const myValue = computed({
    get: () => formatValue(),
    set: val => {
        emits('update:modelValue', fixValue(val))
    },
})

function handleChange(val: string) {
    const myVal = fixValue(val).replace(/\.$/, '')
    myValue.value = myVal
    emits('change', [myVal, padValue(val).replace(/\.$/, '')])
}

const visible = ref(true)

// 统一被监听的属性，当这些属性改变时，重新渲染组件
const observed = computed(() => ({ ...props.options, padDecimal: props.padDecimal }))

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
            // myValue.value = inputRef.value?.input?.value || ''
            myValue.value = inputRef.value?.inputRef?.input?.value || ''
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
