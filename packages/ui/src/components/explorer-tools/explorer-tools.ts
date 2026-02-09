export interface IExplorerToolsProps {
    tools?: ('search' | 'refresh' | 'fullscreen' | 'setting' | 'layout')[]
    group?: string
    searchPlaceholder?: string
    layout?: 'card' | 'list'
    create?: boolean
    createText?: string
    throttle?: number
}

export interface IExplorerToolsEmits {
    (e: 'refresh'): void
    (e: 'fullscreen', status: boolean): void
    (e: 'setting', status: boolean): void
    (e: 'search', value: string): void
    (e: 'layout', value: 'card' | 'list'): void
    (e: 'create'): void
}
