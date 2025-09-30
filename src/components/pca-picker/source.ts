export interface IPCAData {
    id: number
    n: string
    fpy: string
}

interface IItemClassParams {
    value: number | number[] | undefined
    item: IPCAData
    activeMark?: boolean
    syncActive?: boolean
    isHistoryOrHot?: boolean
}

export const getItemClass = (params: IItemClassParams) => {
    const { value, item, activeMark, syncActive, isHistoryOrHot } = params
    const isActive = value === item.id || (Array.isArray(value) && value.includes(item.id))
    return {
        'pca-item': true,
        'active': isActive && (!isHistoryOrHot || syncActive),
        'active-mark': isActive && activeMark,
    }
}
