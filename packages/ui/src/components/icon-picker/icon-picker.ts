export interface IIconPickerProps {
    modelValue: string | undefined
    collection?: string
    collections?: string[]
    disabled?: boolean
}

interface IIconData {
    aliases: { [key: string]: string }
    categories?: {
        [key: string]: string[]
    }
    uncategorized?: string[]
    hidden: string[]
    prefix: string
    title: string
    total: number
}

interface ICollectionData {
    [key: string]: {
        name: string
        category: string
        samples: string[]
        total: number
        palette: boolean
    }
}

const baseUrl = 'https://api.iconify.design'

export function paginateArray<T>(array: T[], ps: number, p: number): T[] {
    return array.slice((p - 1) * ps, p * ps)
}

export function useIcon() {
    const categories = ref<string[]>([]) // 分类名称集合
    const currentCategory = ref<string>('') // 当前分类名称
    const categoriesData = ref<IIconData['categories']>() // 分类数据
    const uncategorizedData = ref<IIconData['uncategorized']>() // 未分类数据
    const ps = ref(50) // 每页数量
    const p = ref(1) // 当前页码
    const keyword = ref('') // 搜索关键字
    const collection = ref<string>('carbon') // 当前collection

    // 所有图标集合
    const allIcons = computed(() => {
        let icons: string[] = []
        if (uncategorizedData.value) {
            icons = icons.concat(uncategorizedData.value)
        }
        if (categoriesData.value) {
            Object.values(categoriesData.value).forEach(categoryIcons => {
                icons = icons.concat(categoryIcons)
            })
        }
        return Array.from(new Set(icons))
    })

    // 当前分类图标集合
    const categoryIcons = computed(() => {
        if (keyword.value) {
            return allIcons.value.filter(icon => icon.includes(keyword.value))
        }
        if (!currentCategory.value || !categoriesData.value) {
            return allIcons.value
        }
        return categoriesData.value[currentCategory.value]
    })
    const pageIcons = computed(() => paginateArray(categoryIcons.value, ps.value, p.value))
    const total = computed(() => categoryIcons.value.length) // 图标总数

    const fetchData = async (prefix = 'carbon') => {
        const url = `${baseUrl}/collection?prefix=${prefix}`
        const res = await fetch(url)
        const data: IIconData = await res.json()
        categoriesData.value = data.categories
        uncategorizedData.value = data.uncategorized
        categories.value = Object.keys(data.categories || {})
    }

    watch(collection, () => {
        p.value = 1
        fetchData(collection.value)
    })

    return {
        fetchData,
        categoryIcons,
        allIcons,
        pageIcons,
        categories,
        currentCategory,
        collection,
        total,
        ps,
        p,
        keyword,
    }
}

export function useCollection() {
    const collections = ref<string[]>([]) // collections名称
    const collectionsData = ref<ICollectionData>() // collection数据
    const ps = ref(10) // 每页数量
    const p = ref(1) // 当前页码
    const keyword = ref('') // 搜索关键字

    const listCollections = computed(() => {
        const myCollections = keyword.value ? collections.value.filter(collection => collection.includes(keyword.value)) : collections.value
        return paginateArray(myCollections, ps.value * p.value, 1)
    })

    const fetchData = async () => {
        const url = `${baseUrl}/collections`
        const res = await fetch(url)
        const data: ICollectionData = await res.json()
        collections.value = Object.keys(data)
        collectionsData.value = data
    }

    const loadMore = () => { p.value++ }
    const search = (val: string) => {
        keyword.value = val
        p.value = 1
    }

    return {
        fetchData,
        collections,
        collectionsData,
        listCollections,
        loadMore,
        keyword,
        search,
        ps,
        p,
    }
}
