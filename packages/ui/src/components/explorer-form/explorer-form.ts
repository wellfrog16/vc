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
    initialValues?: Record<string, any>
    autoInitial?: boolean
    defaultEditing?: boolean
    labelPosition?: FormProps['labelPosition']
    onCancel?: () => void | Promise<void>
    onSave?: (data: Record<string, any>) => void | Promise<void>
}

export interface IExplorerFormEmits {
    (e: 'clickEdit'): void
}
