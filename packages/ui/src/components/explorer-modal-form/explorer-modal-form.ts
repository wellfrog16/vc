import type { FormProps } from 'element-plus'
import type { Reactive } from 'vue'

export interface IExplorerModalFormProps {
    modelValue: boolean
    type: 'dialog' | 'drawer'
    title?: string
    icon?: string
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

export interface IExplorerModalFormEmits {
    (e: 'update:modelValue', value: boolean): void
    (e: 'cancel'): void
    (e: 'edit'): void
    (e: 'save', data: Record<string, any>): void
}
