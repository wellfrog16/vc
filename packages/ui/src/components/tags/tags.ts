export interface ITagsProps {
    modelValue: (string | number)[]
    limit?: number
    regexp?: RegExp
    sameMessage?: string
    errorMessage?: string
    disabled?: boolean
    valueFormat?: (val: string | number) => string | number
}
