declare namespace IGlobal {
    type BaseType = string | number | boolean;
    type IconType = 'el' | 'svg' | 'awesome'
}

interface Window {
    ElementPlusComponents: {
        isAwesomeIconLock?: boolean
        isSVGIconLock?: boolean
    }
}