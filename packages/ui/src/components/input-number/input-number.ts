export interface IInputNumberProps {
    modelValue: number | undefined
    controlsPosition?: 'right' | ''
    size?: 'large' | 'default' | 'small'
    inputNumberClass?: string
    width?: string | number
    align?: 'left' | 'center' | 'right'
}

export interface IInputNumberEmits {
    (e: 'update:modelValue', val: number | undefined): void
    (e: 'change', currentValue: number, oldValue: number): void
}
