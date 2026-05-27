import type { ElTooltipProps } from 'element-plus'
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
    infoTooltip?: {
        tooltipProps?: Partial<ElTooltipProps>
        letter?: string
        maxWidth?: string
        icon?: string
        offsetY?: string
        onShowed?: (code: string | undefined, content: string | undefined, setContent: (content: string) => void) => void
    }
    iconfontUrl?: string
    pcaBaseUrl?: string
    crosProxy?: string
    localCdn?: string
}

export const KEY_NAME = Symbol('VcConfig')
export const injectConfig = () => useInject<IConfigProviderProps>(KEY_NAME)
