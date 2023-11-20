import { useInject } from '@/use/useStore'
import type { PropType } from 'vue'

export interface IPropType {
    button?: {
        confirm?: boolean
        confirmInfo?: {
            title?: string
            confirmButtonText?: string
            cancelButtonText?: string
            msg?: string
        }
    }
}

export const preProps = {
    button: { type: Object as PropType<IPropType['button']> },
}

export const KEY_NAME = Symbol('VCConfig')
export const injectConfig = () => useInject<IPropType>(KEY_NAME)
