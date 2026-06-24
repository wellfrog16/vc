import type { UseStorageOptions } from '@vueuse/core'
import type { Ref } from 'vue'

function getSafeStorage() {
    if (typeof window === 'undefined' || !window.localStorage)
        return undefined
    try {
        // 检测当前环境是否支持构造带 storageArea 的 StorageEvent
        // eslint-disable-next-line no-new
        new StorageEvent('storage', { storageArea: window.localStorage })
        return undefined // 支持，让 useStorage 使用默认 localStorage
    }
    catch {
        // 不支持时，返回一个非 Storage 实例的 StorageLike 对象
        // 迫使 useStorage 走 CustomEvent 分支，避免构造 StorageEvent 报错
        console.warn('当前操作不支持 StorageEvent，将使用 localStorage 的同步 API')
        return {
            getItem: (key: string) => window.localStorage.getItem(key),
            setItem: (key: string, value: string) => window.localStorage.setItem(key, value),
            removeItem: (key: string) => window.localStorage.removeItem(key),
        }
    }
}

function usePersistentModel<T>(
    key: string,
    storageKey: string,
    defaultValue: T,
    options?: UseStorageOptions<T>,
): Ref<T> {
    const storage = useStorage<T>(storageKey, defaultValue, getSafeStorage(), options)
    const instance = getCurrentInstance()
    instance?.emit(`update:${key}`, storage.value)

    return computed<T>({
        get() {
            return storage.value
        },
        set(val) {
            storage.value = val
            instance?.emit(`update:${key}`, val)
        },
    })
}

export default usePersistentModel
