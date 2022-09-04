declare namespace IGlobal {
    type BaseType = string | number | boolean;
    type IconType = 'el' | 'svg' | 'awesome'
    type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
}

interface Window {
    ElementPlusComponents: {
        isAwesomeIconLock?: boolean
        isSVGIconLock?: boolean
    }
}