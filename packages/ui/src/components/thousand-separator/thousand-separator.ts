export interface IThousandSeparatorProps {
    /** 要格式化的数值（数字或数字字符串） */
    value?: string | number | null
    /** 千分位分隔符，默认逗号 */
    separator?: string
    /** 保留小数位数，默认 -1，-1 表示保留原样 */
    decimalPlaces?: number
    /** 空值时显示的占位符 */
    placeholder?: string
}
