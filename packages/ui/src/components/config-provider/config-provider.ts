import { useInject } from '@/use/useStore'

export interface IConfigProviderProps {
    button?: {
        confirm?: {
            type?: 'popconfirm' | 'messagebox' | 'none'
            title?: string
            confirmButtonText?: string
            cancelButtonText?: string
            msg?: string
        }
    }
    iconfontUrl?: string
    pcaBaseUrl?: string
    crosProxy?: string
    localCdn?: string
}

export const KEY_NAME = Symbol('VcConfig')
export const injectConfig = () => useInject<IConfigProviderProps>(KEY_NAME)
