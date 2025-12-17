declare namespace IGlobal {
    type BaseType = string | number | boolean
    type IconType = 'el' | 'svg' | 'awesome'
    type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
}

interface Window {
    VC: {
        isAwesomeIconLock?: boolean
        isSVGIconLock?: boolean
    }
    tinyMCE: unknown
    BMapGL: any
    vc: {
        cdn: {
            name: 'jsdelivr' | 'defaultBase' | 'localCDN'
            path: string
            host: string
        }
    }
}
