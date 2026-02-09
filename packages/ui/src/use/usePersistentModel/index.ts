import type { UseStorageOptions } from '@vueuse/core'
import type { Ref } from 'vue'

function usePersistentModel<T>(
    key: string,
    storageKey: string,
    defaultValue: T,
    options?: UseStorageOptions<T>,
): Ref<T> {
    const storage = useStorage<T>(storageKey, defaultValue, undefined, options)
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
