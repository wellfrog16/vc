export interface IDrawerProps {
    modelValue: boolean
    title?: string
    lazy?: boolean
    showDefaultFooter?: boolean
    boxPadding?: boolean
    fullscreen?: boolean
    showFullscreen?: boolean
    size?: number | string
}

export interface IDrawerEmits {
    (e: 'update:modelValue', value: boolean): void
    (e: 'closed'): void
}
