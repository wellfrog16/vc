// import type { RawEditorSettings } from '@wfrog/utils'
import type config from './config'

export interface ITinymceProps {
    id?: string
    config?: keyof typeof config
    width?: string
    height?: string
    modelValue?: string
    // httpRequest?: RawEditorSettings['images_upload_handler'] // 报错
    httpRequest?: any
    storageKey?: string
    disabled?: boolean
}

export interface ITinymceEmits {
    (e: 'update:modelValue', value: string): void
    (e: 'change', value: string): void
    (e: 'blur', event: FocusEvent): void
}
