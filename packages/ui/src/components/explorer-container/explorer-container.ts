import type { ScrollbarDirection, ScrollbarProps } from 'element-plus'

export interface IExplorerContainerProps {
    title?: string
    icon?: string
    loading?: boolean
    scrollbarProps?: Partial<ScrollbarProps> & {
        onEndReached?: (direction: ScrollbarDirection) => void
        onScroll?: ({ scrollTop, scrollLeft }: {
            scrollTop: number
            scrollLeft: number
        }) => void
    }
}
