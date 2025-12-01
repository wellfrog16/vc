import { useInject } from '@/use/useStore'

export interface IPropType {
    button?: {
        confirm?: {
            type?: 'popconfirm' | 'messagebox' | 'none'
            title?: string
            confirmButtonText?: string
            cancelButtonText?: string
            msg?: string
        }
    }
    pcaBaseUrl?: string
    crosProxy?: string
}

export const KEY_NAME = Symbol('VCConfig')
export const injectConfig = () => useInject<IPropType>(KEY_NAME)
