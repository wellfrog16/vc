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
    pcaBaseUrl?: string
    crosProxy?: string
}

export const KEY_NAME = Symbol('VCConfig')
export const injectConfig = () => useInject<IConfigProviderProps>(KEY_NAME)
