export interface IDragVerifyProps {
    type: 'text' | 'image'
    diffWidth?: number
    imgs?: string[]
    success?: boolean
    width?: number
    height?: number
    background?: [string, string, string]
    circle?: boolean
    radius?: number
    text?: string
    successText?: string
    textColor?: string
    stopToCheck?: boolean
    tips?: boolean
    refresh?: boolean
    successTips?: string
    failedTips?: string
}

export interface IDragVerifyTextProps extends Required<IDragVerifyProps> {
    successRange?: [number, number]
}
