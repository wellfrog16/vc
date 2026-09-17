<template>
    <VcInputNumber v-model="myModelValue" :formatter="formatter" :parser="parser" :controls="controls" align="right">
        <template v-if="$slots.prefix" #prefix>
            <slot name="prefix" />
        </template>
        <template v-if="$slots.suffix" #suffix>
            <slot name="suffix" />
        </template>
    </VcInputNumber>
</template>

<script lang="ts" setup>
import type { IInputThousandEmits, IInputThousandProps } from './input-thousand'
import VcInputNumber from '../input-number/input-number.vue'

const props = withDefaults(defineProps<IInputThousandProps>(), {
    controls: false,
})
const emits = defineEmits<IInputThousandEmits>()

/**
 * 判断字符串是否为合法十进制数字
 * 允许：整数、小数、"1."、".5"、负数
 * 不允许：科学计数法、正号、多小数点、空白
 */
function isDecimalNumber(str: string): boolean {
    return /^-?(?:\d+(?:\.\d*)?|\.\d+)$/.test(str)
}

/**
 * 格式化显示：整数部分加千分位，小数部分原样保留
 * 例：1234567.89 → "1,234,567.89"
 *      -1234     → "-1,234"
 */
function formatter(value: number | string): string {
    if (value === null || value === undefined || value === '') { return '' }

    // 防御 NaN / Infinity
    if (typeof value === 'number' && !Number.isFinite(value)) { return '' }

    const str = String(value)
    const sign = str.startsWith('-') ? '-' : ''
    const [int = '', decimal] = str.replace(/^-/, '').split('.')

    const formatted = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return `${sign}${formatted}${decimal !== undefined ? `.${decimal}` : ''}`
}

/**
 * 解析输入：去掉 空格、千分位逗号
 * 返回字符串，交给 el-input-number 内部处理空值 → undefined
 */
const parser = (value: string): string => value.replace(/[\s,]/g, '')

const myModelValue = computed<number | undefined>({
    get() {
        const val = props.modelValue

        // 字符串：合法十进制才转 number，否则视为空
        if (typeof val === 'string') {
            return isDecimalNumber(val) ? Number(val) : undefined
        }

        // number：过滤 NaN / Infinity
        if (typeof val === 'number') {
            return Number.isFinite(val) ? val : undefined
        }

        // null / undefined 统一返回 undefined
        return undefined
    },
    set(value) {
        // 注意：不能用 `value ? ...`，否则 0 会被丢掉
        if (typeof value === 'number' && Number.isFinite(value)) {
            emits('update:modelValue', value)
        }
        else {
            emits('update:modelValue', undefined)
        }
    },
})
</script>
