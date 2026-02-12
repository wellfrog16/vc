export interface IExplorerFilterProps {
    placeholder?: string
    clearable?: boolean
    paddingBottom?: number
    create?: boolean
    debounce?: number
    disabled?: boolean
}

export interface IExplorerFilterEmits {
    (e: 'filter', keyword: string): void
    (e: 'create'): void
}
