declare namespace IGlobal {
    type BaseType = string | number | boolean
    type IconType = 'el' | 'svg' | 'awesome' | 'iconify'
    type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
}

interface Window {
    VC: {
        isAwesomeIconLock?: boolean
        isSVGIconLock?: boolean
        cdn?: {
            name: 'jsdelivr' | 'defaultBase' | 'localCDN'
            path?: string
            host?: string
        }
    }
    tinyMCE: unknown
    BMapGL: any
}
