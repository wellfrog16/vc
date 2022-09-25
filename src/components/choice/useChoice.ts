import { computed, onMounted, ref } from 'vue'
import { storage } from '@wfrog/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export interface IOption {
    label: string
    value: string | number | boolean
    key?: string | number
}

export interface IChoiceOptionProps {
    key: keyof IOption
    value: keyof IOption
    label: keyof IOption
}

export type IChoiceOption = IOption[] | string[] | number[]

export const preProps = {
    name: { type: String, default: '' },
    multiple: { type: Boolean, default: false },
    modelValue: { type: [String, Number, Boolean, Array] as PropType<string | string[] | number | number[] | boolean>, default: '', required: true },
    options: { type: [Array, Function] as PropType<IChoiceOption | (() => Promise<IChoiceOption>)>, default: () => [] },
    props: { type: Object as PropType<Partial<IChoiceOptionProps>>, default: () => { } },
    expires: { type: [Date, Number] as PropType<Date | number>, default: 60 * 60 * 2 },
    loadingText: { type: String, default: '加载中' },
}

export const preEmit = ['update:modelValue', 'init']

export interface IContext {
    props: ExtractPropTypes<typeof preProps>
    emits: (event: 'update:modelValue' | 'init', ...args: any[]) => void
}

const useChoice = ({ props, emits }: IContext, storagPrefix: string) => {
    const loading = ref(false)
    const asyncOptions = ref<IChoiceOption>()

    const myValue = computed<any>({
        get: () => { return loading.value ? props.loadingText : props.modelValue },
        set: val => emits('update:modelValue', val),
    })

    const myProps = computed<IChoiceOptionProps>(() => ({ label: 'label', value: 'value', key: 'value', ...props.props }))
    const myOptions = computed(() => {
        const options = Array.isArray(props.options) ? props.options : asyncOptions.value || []

        // 字符数组
        const [first] = options
        if (typeof first === 'string' || typeof first === 'number') { // 字符数组
            return options.map(item => ({ [myProps.value.label]: item, [myProps.value.value]: item }))
        }
        return options
    }) as unknown as IOption[]

    const init = async () => {
        // 同步数据
        if (Array.isArray(props.options)) { return }

        // 异步数据
        const name = `${storagPrefix}-${props.name}`
        // 尝试读取storage缓存
        if (props.name) {
            const val = storage.get(name) as IChoiceOption

            if (val) {
                asyncOptions.value = val
                emits('init', val)
                return
            }
        }

        // 无缓存数据，则请求数据
        loading.value = true
        try {
            asyncOptions.value = await props.options()

            // 写入缓存
            props.name && storage.set(name, asyncOptions.value, { expires: props.expires })
            emits('init', asyncOptions.value)
        }
        finally {
            loading.value = false
        }
    }

    onMounted(() => init())

    return { loading, myOptions, myProps, myValue, init }
}

export default useChoice
