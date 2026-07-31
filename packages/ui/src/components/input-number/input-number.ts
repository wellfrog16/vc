export interface IInputNumberProps {
    modelValue: number | undefined
    precision?: number
    controlsPosition?: 'right' | ''
    size?: 'large' | 'default' | 'small'
    inputNumberClass?: string
    width?: string | number
}

export interface IInputNumberEmits {
    (e: 'update:modelValue', val: number | undefined): void
    (e: 'change', currentValue: number, oldValue: number): void
    (e: 'blur', event: Event): void
}
