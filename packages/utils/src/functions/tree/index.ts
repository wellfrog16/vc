function filter<
    T extends { [P in K]?: T[] },
    K extends string = 'children',
>(items: T[], check: (item: T) => boolean, options?: { prop?: K, fullPath?: boolean }): T[] {
    const prop = (options?.prop ?? ('children' as unknown)) as K
    const fullPath = options?.fullPath ?? true
    const result: T[] = []

    items.forEach(item => {
        if (check(item)) {
            result.push(item)
        }
        else {
            const children = item[prop] as T[] | undefined
            if (children && children.length > 0) {
                const filteredChildren = filter<T, K>(children, check, { prop, fullPath })
                if (filteredChildren && filteredChildren.length > 0) {
                    if (fullPath) {
                        result.push({ ...item, [prop]: filteredChildren } as T)
                    }
                    else {
                        result.push(...filteredChildren)
                    }
                }
            }
        }
    })

    return result
}

// 返回节点路径，同样不使用 Record
function getPath<
    T extends { [P in K]?: T[] },
    K extends string = 'children',
>(items: T[], compare: (item: T) => boolean, options?: { prop?: K }): T[] {
    const prop = (options?.prop ?? ('children' as unknown)) as K
    const result: T[] = []

    const getNode = (items1: T[]): boolean => {
        return items1.some(item => {
            result.push(item)

            if (compare(item)) {
                return true
            }
            else {
                const children = item[prop] as T[] | undefined
                if (children && children.length > 0) {
                    const isGot = getNode(children)
                    if (isGot) {
                        return true
                    }
                    else {
                        result.pop()
                        return false
                    }
                }
                else {
                    result.pop()
                    return false
                }
            }
        })
    }

    getNode(items)
    return result
}

type ValueType = string | number

interface TreeNode {
    value: ValueType
    children?: TreeNode[]
}

/**
 * 判断 target 是否是 self 节点或其子孙节点的 value
 * @param treeData - 树数据
 * @param self - 起始节点的 value
 * @param target - 要查找的目标 value
 * @returns target 是 self 或其子孙则返回 true
 */
function isSelfOrDescendant(treeData: TreeNode[], self: ValueType, target: ValueType): boolean {
    // 先找到 self 节点
    const selfNode = findNode(treeData, self)

    // 没找到 self 节点，直接返回 false
    if (!selfNode)
        return false

    // 先判断 target 是否就是 self 本身
    if (selfNode.value === target)
        return true

    // 再判断 target 是否在 self 的子孙中
    return hasDescendant(selfNode, target)
}

/**
 * 在树中查找指定 value 的节点
 */
function findNode(treeData: TreeNode[], value: ValueType, compare: (a: TreeNode, b: ValueType) => boolean = (a, b) => a.value === b): TreeNode | null {
    for (const node of treeData) {
        if (compare(node, value)) {
            return node
        }
        if (node.children?.length) {
            const found = findNode(node.children, value)
            if (found)
                return found
        }
    }
    return null
}

/**
 * 判断节点是否有指定 value 的子孙（不包含自身）
 */
function hasDescendant(node: TreeNode, target: ValueType): boolean {
    if (!node.children?.length)
        return false

    for (const child of node.children) {
        if (child.value === target)
            return true
        if (hasDescendant(child, target))
            return true
    }
    return false
}

export default {
    filter,
    getPath,
    isSelfOrDescendant,
    findNode,
    hasDescendant,
}
