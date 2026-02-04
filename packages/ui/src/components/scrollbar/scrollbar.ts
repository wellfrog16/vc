import type { ScrollbarProps } from 'element-plus'

export interface IScrollbarProps extends Partial<ScrollbarProps> {
    flex?: boolean
    padding?: number
    fillHeight?: boolean
}
