import type { CascaderOption, CascaderProps } from 'element-plus/es/components/cascader-panel'

export interface IPopoverCascaderProps {
    modelValue: string | number | string[] | number[] | undefined
    multiple?: boolean
    emptyText?: string
    props: CascaderProps
    options: CascaderOption[]
}
