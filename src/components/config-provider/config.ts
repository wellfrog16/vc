import { useInject } from '@/use/useStore'
import type { PropType } from 'vue'

export interface IPropType {
    button?: {
        confirm?: 'popconfirm' | 'messagebox'
        confirmInfo?: {
            title?: string
            confirmButtonText?: string
            cancelButtonText?: string
            msg?: string
        }
    }
    pcaBaseUrl?: string
    crosProxy?: string
}

export const preProps = {
    button: { type: Object as PropType<IPropType['button']> },
    pcaBaseUrl: { type: String, default: '' },
    crosProxy: { type: String, default: '' },
}

export const KEY_NAME = Symbol('VCConfig')
export const injectConfig = () => useInject<IPropType>(KEY_NAME)
