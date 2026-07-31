export interface IDateRangePickerProps {
    modelValue: string[]
    valueFormat?: string
    limitDays?: number
    includeToday?: boolean
}

export interface IDateRangePickerEmits {
    (e: 'update:modelValue', value: string[]): void
}
