export interface IOptionType {
    decimalScale: number
    integerScale: number
    prefix?: string
}

export interface IThousandInputProps {
    modelValue?: string
    formatValue?: string
    options?: IOptionType
    padDecimal?: boolean
    disabled?: boolean
}

export interface IThousandInputEmits {
    (e: 'update:modelValue', value: string): void
    (e: 'update:formatValue', value: string): void
    (e: 'change', value: [string, string]): void
}
