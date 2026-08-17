export interface IExplorerFilterProps {
    placeholder?: string
    clearable?: boolean
    paddingBottom?: number
    create?: boolean
    debounce?: number
    disabled?: boolean
    closeLocalFilter?: boolean
}

export interface IExplorerFilterEmits {
    (e: 'filter', keyword: string): void
    (e: 'clear', keyword: string): void
    (e: 'change', keyword: string): void
    (e: 'create'): void
}
