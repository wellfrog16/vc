import type { IFlag2Code, IFlag3Code } from '@/components/flag/flags'

export type ICurrencyCode = 'CNY' | 'USD' | 'JPY' | 'EUR' | 'TWD' | 'KRW'

export interface ICurrencyInfo {
    code: ICurrencyCode
    flag: IFlag3Code | IFlag2Code
    option: { prefix: string, decimalScale: number, integerScale: number }
}

const data: ICurrencyInfo[] = [
    {
        code: 'CNY',
        flag: 'CHN',
        option: { prefix: '¥', decimalScale: 2, integerScale: 20 },
    },
    {
        code: 'USD',
        flag: 'USA',
        option: { prefix: '$', decimalScale: 2, integerScale: 20 },
    },
    {
        code: 'JPY',
        flag: 'JPN',
        option: { prefix: '¥', decimalScale: 0, integerScale: 20 },
    },
    {
        code: 'EUR',
        flag: 'EU',
        option: { prefix: '€', decimalScale: 2, integerScale: 20 },
    },
    {
        code: 'TWD',
        flag: 'CHN',
        option: { prefix: 'NT$', decimalScale: 0, integerScale: 20 },
    },
    {
        code: 'KRW',
        flag: 'KOR',
        option: { prefix: '₩', decimalScale: 0, integerScale: 20 },
    },
]

export default data
