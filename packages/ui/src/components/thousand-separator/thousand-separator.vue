<template>
    <span :class="$style['thousand-separator']">
        {{ formattedValue }}
    </span>
</template>

<script setup lang="ts">
import type { IThousandSeparatorProps } from './thousand-separator'
import { isFinite, isNaN } from 'lodash-es'

const props = withDefaults(defineProps<IThousandSeparatorProps>(), {
    value: null,
    separator: ',',
    decimalPlaces: 0,
    placeholder: '-',
})

/**
 * 格式化数字为千分位字符串
 */
function formatNumber(num: number): string {
    // 处理 NaN 和 Infinity
    if (!isFinite(num))
        return String(num)

    // 分离整数和小数部分
    const parts = num.toString().split('.')
    let integerPart = parts[0]
    const decimalPart = parts.length > 1 ? `.${parts[1]}` : ''

    // 处理负号
    const isNegative = integerPart.startsWith('-')
    if (isNegative) {
        integerPart = integerPart.slice(1)
    }

    // 整数部分添加千分位分隔符
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, props.separator)

    // 处理小数部分：-1 保留原样；0 不显示小数点；>0 四舍五入并补齐位数
    let finalDecimal = decimalPart
    if (props.decimalPlaces === 0) {
        finalDecimal = ''
    }
    else if (props.decimalPlaces > 0) {
        finalDecimal = `.${num.toFixed(props.decimalPlaces).split('.')[1]}`
    }

    return (isNegative ? '-' : '') + formattedInteger + finalDecimal
}

/**
 * 计算格式化后的显示值
 */
const formattedValue = computed(() => {
    if (props.value === null || props.value === undefined || props.value === '') {
        return props.placeholder
    }

    // 尝试转换为数字
    let num: number
    if (typeof props.value === 'string') {
    // 移除可能已有的千分位分隔符
        const cleanStr = props.value.replace(new RegExp(`\\${props.separator}`, 'g'), '')
        num = Number.parseFloat(cleanStr)
    }
    else {
        num = props.value
    }

    if (isNaN(num)) {
        return String(props.value) // 无法解析则直接返回原始字符串
    }

    return formatNumber(num)
})
</script>

<style lang="scss" module>
.thousand-separator {
    font-variant-numeric: tabular-nums;
    /* 可选：继承父元素样式，无需额外样式 */
}
</style>
