export interface IInfoTooltipProps {
    content?: string
    code?: string
    letter?: string
    maxWidth?: string
    icon?: string
    iconClass?: string
    offsetY?: string
}

export interface IInfoTooltipEmits {
    (e: 'click', code?: string): void
}
