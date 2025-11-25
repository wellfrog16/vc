import type { RouteRecordRaw } from 'vue-router'

export const isHiddenItem = (item: RouteRecordRaw) => item.meta?.hidden || item.meta?.visible === false

export function isHiddenChildren(item: RouteRecordRaw) {
    let isHidden = false
    if (item.children && item.children.length > 0) { isHidden = item.children.every(item1 => isHiddenItem(item1)) }

    return isHidden
}
