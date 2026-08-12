export interface IScrollbarProps {
    flex?: boolean
    fillHeight?: boolean
    viewMargin?: string
    scrollLoad?: boolean // 是否开启滚动加载
    scrollLoadDisabled?: boolean // 是否禁用继续滚动加载（例如没有更多数据时）
    scrollLoadRootMargin?: string // IntersectionObserver rootMargin
    scrollLoadThreshold?: number // IntersectionObserver threshold
    loading?: boolean // 是否正在加载中（用于展示底部加载状态）
    loadingText?: string // 加载中提示文本
    noMoreText?: string // 没有更多数据提示文本
    empty?: boolean // 是否展示空状态
    emptyText?: string // 空状态提示文本
}
