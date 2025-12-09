export interface ITagsProps {
    modelValue: (string | number)[]
    limit?: number
    regexp?: RegExp
    sameMessage?: string
    errorMessage?: string
    readonly?: boolean
    valueFormat?: (val: string | number) => string | number
}
