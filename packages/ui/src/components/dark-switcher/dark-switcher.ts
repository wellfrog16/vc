import type { BasicColorSchema } from '@vueuse/core'

export interface IDarkSwitcherProps {
    initialValue?: globalThis.MaybeRefOrGetter<BasicColorSchema>
    size?: string | number
    storageKey?: string
    duration?: number
}

export interface IDarkSwitcherEmits {
    (e: 'change', value: boolean): void
}
