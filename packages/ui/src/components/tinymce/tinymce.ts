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
}
