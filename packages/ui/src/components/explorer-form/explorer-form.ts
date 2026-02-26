import type { FormProps } from 'element-plus'
import type { Reactive } from 'vue'

export interface IExplorerFormProps {
    editing?: boolean
    title: string
    icon?: string
    form: Reactive<{
        fields: Record<string, any>
        rules?: Record<string, any>
    }>
    formProps?: Partial<FormProps>
    onCancel?: () => void | Promise<void>
    onSave?: () => void | Promise<void>
}

export interface IExplorerFormEmits {
    (e: 'clickEdit'): void
}
