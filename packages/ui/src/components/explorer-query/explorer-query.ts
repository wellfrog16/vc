export interface IExplorerQueryProps {
    padding?: number
    height?: number
    model: Record<string, any>
}

export interface IExplorerQueryEmits {
    (e: 'search', query: Record<string, any>): void
}
