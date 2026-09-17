export interface IInputThousandProps {
    modelValue?: string | number | null
    controls?: boolean
}

export interface IInputThousandEmits {
    (e: 'update:modelValue', value: number | undefined): void
}
