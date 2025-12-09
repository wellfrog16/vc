interface IOptionType {
    decimalScale: number
    integerScale: number
    prefix?: string
}

export interface IThousandInputProps {
    modelValue?: string
    formatValue?: string
    options?: IOptionType
    padDecimal?: boolean
}
