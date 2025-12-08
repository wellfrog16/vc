import type { CascaderOption, CascaderProps } from 'element-plus'
import type { ComputedRef, Ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { storage } from '@wfrog/utils'

import { flatMap, flatMapDeep } from 'lodash-es'

import { computed, ref, shallowRef } from 'vue'
import { useInject } from '@/use/useStore'

export interface IPCAPickerProps {
    source: 'p' | 'p-py' | 'p-py-fn' | 'pc' | 'pc-py' | 'pc-py-fn' | 'pca' | 'pca-py' | 'pca-py-fn'
    type: 'P' | 'C' | 'PC' | 'PCA'
    hotIds?: number[] // 热门城市的codes
    hotText?: string // 热门城市文案
    history?: boolean // 是否记录历史选择
    historyText?: string // 历史选择文案
    historyMax?: number // 历史记录的最大条数
    historyStorageKey?: string // 历史记录的Storage key
    excludeIds?: number[] // 排除的ids
    nameKey?: string
    modelValue: number | number[] | undefined
    disabled?: boolean
    multiple?: boolean
    placeholder?: string
    loadingText?: string
    loadFailedText?: string
    activeMark?: boolean // 选中项角标
    syncActive?: boolean // 是否在热门和历史选择里同步高亮选中项
    limit?: number // 多选时的数量限制
    props?: CascaderProps
}

export interface ICommmonStateType {
    props: Required<IPCAPickerProps>
    availableData: ComputedRef<IPCAData[]>
    flatData: ComputedRef<IPCAData[]>
    filterData: ComputedRef<IPCAData[]>
    historyData: ComputedRef<IPCAData[]>
    fpyGroupData: ComputedRef<{ label: string, childs: IPCAData[] }[]>
    optionData: ComputedRef<CascaderOption[]>
    itemClass: (item: IPCAData, isHistoryOrHot?: boolean) => Record<string, boolean>
    hasHot: ComputedRef<boolean>
    hotData: ComputedRef<IPCAData[]>
    clickItem: (item: IPCAData) => void
    clickItems: (items: IPCAData[]) => void
    keyword: Ref<string>
    popoverVisible: Ref<boolean>
    togglePopoverVisible: (visible?: boolean) => boolean
    updatePopper: () => Promise<void>
    // addHistory: (id: number) => void
    // historyIds: number[]
}

export interface IPCAData {
    id: number
    n: string
    fpy: string
    fn?: string
    py?: string
    childs?: IPCAData[]
    [key: string]: any
}

export function usePCAData(params: IPCAPickerProps) {
    const loading = ref(false)
    const myProps = ref<IPCAPickerProps>(params)
    const storageKey = computed(() => `vc-pca-picker-${myProps.value?.source}`)
    const pcaData = shallowRef<IPCAData[]>([])
    const keyword = ref('')
    const loadFailed = ref(false)

    const setProps = (data: IPCAPickerProps) => {
        myProps.value = data
    }

    const fetchData = async (pcaBaseUrl: string, crosProxy?: string): Promise<IPCAData[]> => {
    // 有缓存
        const storageData = storage.get<IPCAData[]>(storageKey.value)
        if (storageData && storageData.length) {
            pcaData.value = storageData as IPCAData[]
            return pcaData.value
        }

        // 无缓存
        loading.value = true
        loadFailed.value = false
        try {
            const sourceUrl = crosProxy ? `${crosProxy}${encodeURIComponent(`${pcaBaseUrl}/${myProps.value!.source}.json`)}` : `${pcaBaseUrl}/${myProps.value!.source}.json`
            const res = await fetch(sourceUrl)
            const data = await res.json()
            storage.set(storageKey.value, data)
            pcaData.value = data
            return data
        }
        catch (error) {
            console.error(error)
            loadFailed.value = true
            return []
        }
        finally {
            loading.value = false
        }
    }

    // 去掉 excludeIds 的数据
    const availableData = computed(() => {
        if (!myProps.value) { return [] }
        if (!myProps.value.excludeIds || myProps.value.excludeIds.length === 0) {
            return pcaData.value || []
        }

        if (myProps.value.type === 'P') {
            return pcaData.value?.filter(i => !myProps.value!.excludeIds?.includes(i.id)) || []
        }
        if (myProps.value.type === 'C') {
            const tempData = pcaData.value?.filter(i => !myProps.value!.excludeIds?.includes(i.id)) || []
            tempData.forEach(i => {
                i.childs = i.childs?.filter(j => !myProps.value!.excludeIds?.includes(j.id)) || []
            })
            return tempData
        }
        if (myProps.value.type === 'PC') {
            const tempData = pcaData.value?.filter(i => !myProps.value!.excludeIds?.includes(i.id)) || []
            tempData.forEach(i => {
                i.childs = i.childs?.filter(j => !myProps.value!.excludeIds?.includes(j.id)) || []
                i.childs.forEach(k => { delete k.childs })
            })
            return tempData
        }
        if (myProps.value.type === 'PCA') {
            const tempData = pcaData.value?.filter(i => !myProps.value!.excludeIds?.includes(i.id)) || []
            tempData.forEach(i => {
                i.childs = i.childs?.filter(j => !myProps.value!.excludeIds?.includes(j.id)) || []
                i.childs.forEach(k => {
                    k.childs = k.childs?.filter(l => !myProps.value!.excludeIds?.includes(l.id)) || []
                })
            })
            return tempData
        }
        return []
    })

    // 用于搜索，拍平的数据
    const flatData = computed(() => {
        if (!myProps.value) { return [] }
        let tempData: IPCAData[] = []
        if (myProps.value.type === 'P') {
            tempData = availableData.value
        }
        if (myProps.value.type === 'C') {
            tempData = flatMap(availableData.value, i => i.childs || [])
        }
        if (myProps.value.type === 'PCA' || myProps.value.type === 'PC') {
            tempData = flatMapDeep(availableData.value, function traverse(node: IPCAData): any[] {
                if (!node.childs || node.childs.length === 0) {
                    return [node] // 叶子，收集
                }
                return node.childs.map(traverse) // 分支，继续递归
            })
        }
        return tempData
    })

    // 按拼音分组的市/区
    const fpyGroup = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
    const fpyGroupData = computed(() => {
        if (myProps.value.type === 'C') {
            return fpyGroup.map(i => ({
                label: i,
                childs: flatData.value.filter(j => j.fpy && i.includes(j.fpy)) || [],
            }))
        }
        return []
    })

    const getValueData = (values: number | number[] | undefined) => flatData.value!.filter(i => (Array.isArray(values) ? values : []).includes(i.id)) || []

    // cascader 的 option 数据
    const optionData = computed(() => {
        if (!myProps.value || !flatData.value || flatData.value.length === 0) {
            return []
        }

        // 树形结构返回
        if (myProps.value.type === 'PCA' || myProps.value.type === 'PC') {
            return availableData.value as unknown as CascaderOption[]
        }

        // 平面结构返回
        return flatData.value as unknown as CascaderOption[]
    })

    // 返回搜索的数据
    const filterData = computed(() => {
        if (keyword.value) {
            const result = flatData.value.filter(i => i.n.includes(keyword.value) || i.fn?.includes(keyword.value) || i.py?.includes(keyword.value))

            // 截取前 48 个，太多的搜索结果对于搜索无意义，48 个保持无垂直滚动条
            return result.slice(0, 48)
        }
        return []
    })

    // 是否配置了热点省/市/区
    const hasHot = computed(() => Array.isArray(myProps.value?.hotIds) && myProps.value?.hotIds.length > 0)

    // 热门省/市/区
    const hotData = computed(() => {
        if (!myProps.value?.hotIds || myProps.value?.hotIds.length === 0) {
            return []
        }
        return flatData.value?.filter(i => myProps.value?.hotIds?.includes(i.id)) || []
    })

    // 只取初始化时 props 的 historyStorageKey，后续不改变
    const historyStorageKey = `vc-pca-history-${myProps.value?.type.toLowerCase()}`
    const historyIds = useStorage<number[]>(myProps.value?.historyStorageKey || historyStorageKey, [])
    // 历史数据
    const historyData = computed(() => {
        if (!myProps.value.history || !historyIds.value || historyIds.value.length === 0) {
            return []
        }
        const data: IPCAData[] = []
        historyIds.value.forEach(id => {
            const item = flatData.value?.find(i => i.id === id)
            item && data.push(item)
        })
        return data
    })

    const appendToHistory = (id: number) => {
        if (!myProps.value.history) { return }
        if (!myProps.value.historyMax) { return }
        const ids = historyIds.value || []
        const index = ids.indexOf(id)
        if (index > -1) { ids.splice(index, 1) }
        ids.unshift(id)
        if (ids.length > myProps.value.historyMax) { ids.splice(myProps.value.historyMax) }
        historyIds.value = ids
    }

    return {
        fetchData,
        loading,
        loadFailed,
        filterData,
        flatData,
        keyword,
        availableData,
        optionData,
        setProps,
        hasHot,
        hotData,
        historyData,
        appendToHistory,
        getValueData,
        fpyGroupData,
    }
}

export const KEY_NAME = Symbol('VCPCA')
export const injectCommonState = () => useInject<ICommmonStateType>(KEY_NAME)
