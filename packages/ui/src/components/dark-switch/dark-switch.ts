import type { BasicColorSchema } from '@vueuse/core'

export interface IDarkSwitchProps {
    initialValue?: globalThis.MaybeRefOrGetter<BasicColorSchema>
    size?: string | number
    storageKey?: string
    duration?: number
}

export interface IDarkSwitchEmits {
    (e: 'change', value: boolean): void
}
