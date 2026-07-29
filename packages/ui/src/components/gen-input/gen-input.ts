export interface IGenInputProps {
    modelValue: string | number | undefined // 输入框的值
    checkboxLabel?: string // checkbox 的 label
    defaultChecked?: boolean // checkbox 默认是否选中，默认 true
    placeholder?: string // 输入框占位符
    disabled?: boolean // 是否禁用
    genPlaceholder?: string // 生成时的占位符
}

export interface IGenInputEmits {
    (e: 'update:modelValue', value: string | number): void
}
