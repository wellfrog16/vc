export interface IThousandSeparatorOptions {
    /** 千分位分隔符，默认逗号 */
    separator?: string
    /** 保留小数位数：>0 四舍五入并补齐位数；0 不显示小数部分；-1 保留原样，默认 -1 */
    decimalPlaces?: number
}

/**
 * 千分位格式化，截断部分四舍五入
 * 字符串输入不经过 Number 转换（无精度损失），数字输入走 Intl.NumberFormat
 * @param value 要格式化的数值（数字或数字字符串）
 * @param options separator：千分位分隔符；decimalPlaces：保留小数位数
 */
function thousandSeparator(
    value: string | number | null | undefined,
    options: IThousandSeparatorOptions = {},
): string {
    if (value === null || value === undefined || value === '') { return '' }
    const separator = options.separator ?? ','
    const decimalPlaces = options.decimalPlaces ?? -1

    if (typeof value === 'string') {
        const cleanStr = value.split(separator).join('').trim()
        // 纯数字字符串：走精确路径，不转数字
        if (/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(cleanStr)) {
            return formatNumericString(cleanStr, separator, decimalPlaces)
        }
        // e-notation 等其他可解析形式：回退数字路径
        const num = Number.parseFloat(cleanStr)
        if (Number.isNaN(num)) {
            return value // 无法解析则直接返回原始字符串
        }
        return formatNumber(num, separator, decimalPlaces)
    }

    return formatNumber(value, separator, decimalPlaces)
}

/**
 * 格式化数字为千分位字符串
 */
function formatNumber(num: number, separator: string, decimalPlaces: number): string {
    // 处理 NaN 和 Infinity
    if (!Number.isFinite(num))
        return String(num)

    // 保持 -0 显示为 0
    const safeNum = Object.is(num, -0) ? 0 : num

    const formatter = new Intl.NumberFormat('en-US', buildOptions(safeNum, decimalPlaces))

    // formatToParts 将默认分组符替换为自定义 separator
    return formatter.formatToParts(safeNum)
        .map(part => (part.type === 'group' ? separator : part.value))
        .join('')
}

/**
 * 根据 decimalPlaces 构造 Intl.NumberFormatOptions
 * -1 保留原样；0 不显示小数；>0 四舍五入并补齐位数
 */
function buildOptions(num: number, decimalPlaces: number): Intl.NumberFormatOptions {
    if (decimalPlaces < 0) {
        // 保留原样：按数字自身的小数位数设置 maximumFractionDigits
        const decimalLength = (String(Math.abs(num)).split('.')[1] ?? '').length
        return {
            useGrouping: true,
            minimumFractionDigits: 0,
            maximumFractionDigits: decimalLength,
        }
    }
    return {
        useGrouping: true,
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
    }
}

/**
 * 精确格式化数字字符串（不经过 Number 转换，无精度损失）
 * cleanStr: 已移除 separator 的数字字符串，如 "-1234.567"
 */
function formatNumericString(cleanStr: string, separator: string, decimalPlaces: number): string {
    const negative = cleanStr.startsWith('-')
    const s = (negative || cleanStr.startsWith('+')) ? cleanStr.slice(1) : cleanStr
    let [intPart = '0', decPart = ''] = s.split('.')
    // 去除前导 0（与 parseFloat 行为一致）
    intPart = intPart.replace(/^0+(?=\d)/, '') || '0'

    if (decimalPlaces >= 0) {
        const keep = decimalPlaces
        const nextDigit = decPart[keep]
        let kept = decPart.slice(0, keep)
        // 四舍五入（half away from zero）：截断位后首位 >= 5 则进 1
        if (nextDigit && nextDigit >= '5') {
            const combined = BigInt(intPart + kept.padEnd(keep, '0')) + BigInt(1)
            const str = combined.toString().padStart(intPart.length + keep, '0')
            if (keep === 0) {
                intPart = str
                kept = ''
            }
            else {
                intPart = str.slice(0, -keep)
                kept = str.slice(-keep)
            }
        }
        decPart = kept.padEnd(keep, '0')
    }
    // decimalPlaces = -1：decPart 保留原样

    const groupedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    const dec = decPart ? `.${decPart}` : ''
    // 结果为 0 时不显示负号（与 number 路径 -0 显示为 0 的行为一致）
    const isZero = intPart === '0' && !/[1-9]/.test(decPart)
    return (negative && !isZero ? '-' : '') + groupedInt + dec
}

export default thousandSeparator
