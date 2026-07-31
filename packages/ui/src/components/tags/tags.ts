export interface ITagsProps {
    modelValue: (string | number)[]
    limit?: number
    regexp?: RegExp
    sameMessage?: string
    errorMessage?: string
    disabled?: boolean
    valueFormat?: (val: string | number) => string | number
}

export interface ITagsEmits {
    (e: 'update:modelValue', val: any[]): void
    (e: 'change', val: any[]): void
    (e: 'dragStart', event: any): void
    (e: 'dragEnd', event: any): void
}
