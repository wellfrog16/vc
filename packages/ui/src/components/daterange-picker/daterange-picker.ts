export interface IDateRangePickerProps {
    modelValue: string[]
    valueFormat?: string
    limitDays?: number
    includeToday?: boolean
    disabled?: boolean
}

export interface IDateRangePickerEmits {
    (e: 'update:modelValue', value: string[]): void
    (e: 'change', value: string[]): void
    (e: 'blur', event: FocusEvent): void
}
