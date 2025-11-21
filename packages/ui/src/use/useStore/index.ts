import type { InjectionKey } from 'vue'
import { inject, provide } from 'vue'

// 注入数据
export function useProvide(keyName: string | symbol, instance: Record<string, unknown>) {
    const KEY: Record<keyof typeof instance, symbol> = {}
    Object.keys(instance).forEach(key => {
        const ukey = Symbol(key)
        KEY[key] = ukey
        provide(ukey, instance[key])
    })

    provide(keyName, KEY)
    return KEY
}

// 获取数据
export function useInject<T>(keyName: InjectionKey<any>): T {
    const keys = inject(keyName, {}) as Record<keyof T, any>
    const result = {} as any

    Object.keys(keys).forEach(key => {
        result[key] = inject(keys[key as keyof typeof keys])
    })
    return result
}
