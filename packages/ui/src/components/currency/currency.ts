import type { IFlag2Code, IFlag3Code } from '@/components/flag/flags'

export type ICurrencyCode = 'CNY' | 'USD' | 'JPY' | 'EUR' | 'TWD' | 'KRW'

export interface ICurrencyInfo {
    code: ICurrencyCode
    flag: IFlag3Code | IFlag2Code
    option: { prefix: string, precision: number }
}

export interface ICurrencyProps {
    modelValue: string
    code: ICurrencyCode | ICurrencyCode[]
    flag?: boolean
    prefix?: boolean
    suffix?: boolean
    prepend?: boolean
    disabled?: boolean
}

export interface ICurrencyEmits {
    (e: 'update:modelValue', value: string): void
    (e: 'change', value: string, code: ICurrencyCode): void
}

const data: ICurrencyInfo[] = [
    { code: 'CNY', flag: 'CHN', option: { prefix: '¥', precision: 2 } },
    { code: 'USD', flag: 'USA', option: { prefix: '$', precision: 2 } },
    { code: 'JPY', flag: 'JPN', option: { prefix: '¥', precision: 0 } },
    { code: 'EUR', flag: 'EU', option: { prefix: '€', precision: 2 } },
    { code: 'TWD', flag: 'CHN', option: { prefix: 'NT$', precision: 0 } },
    { code: 'KRW', flag: 'KOR', option: { prefix: '₩', precision: 0 } },
]

export default data
