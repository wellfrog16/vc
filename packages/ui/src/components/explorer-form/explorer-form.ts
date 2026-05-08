import type { FormProps } from 'element-plus'
import type { Reactive } from 'vue'

export interface IExplorerFormProps {
    title: string
    icon?: string
    form: Reactive<{
        fields: Record<string, any>
        rules?: Record<string, any>
    }>
    formProps?: Partial<FormProps>
    disabled?: boolean // 表单禁用
    editable?: boolean // 可编辑
    editing?: boolean // 编辑中
    loading?: boolean // 加载中
    labelPosition?: FormProps['labelPosition']
    showCancel?: boolean
}

export interface IExplorerFormEmits {
    (e: 'cancel'): void
    (e: 'edit'): void
    (e: 'save', data: Record<string, any>): void
}
