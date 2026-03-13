import type { FormProps } from 'element-plus'
import type { Reactive } from 'vue'

export interface IExplorerDialogFormProps {
    title?: string
    icon?: string
    visible: boolean
    disabled?: boolean // 表单禁用
    editable?: boolean // 可编辑
    editing?: boolean // 编辑中
    loading?: boolean // 加载中
    form: Reactive<{
        fields: Record<string, any>
        rules?: Record<string, any>
    }>
    formProps?: Partial<FormProps>
    labelPosition?: FormProps['labelPosition']
}

export interface IExplorerDialogFormEmits {
    (e: 'update:visible', visible: boolean): void
    (e: 'cancel'): void
    (e: 'edit'): void
    (e: 'save', data: Record<string, any>): void
}
