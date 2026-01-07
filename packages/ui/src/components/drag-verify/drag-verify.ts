export interface IDragVerifyProps {
    type: 'text' | 'image'
    success?: boolean
    width?: number
    height?: number
    background?: [string, string, string]
    circle?: boolean
    radius?: number
    text?: string
    successText?: string
    textColor?: string
}
