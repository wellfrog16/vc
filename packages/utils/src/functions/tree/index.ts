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
>(items: T[], check: (item: T) => boolean, options?: { prop?: K }): T[] {
    const prop = (options?.prop ?? ('children' as unknown)) as K
    const result: T[] = []

    const getNode = (items1: T[]): boolean => {
        return items1.some(item => {
            result.push(item)

            if (check(item)) {
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

export default {
    filter,
    getPath,
}
