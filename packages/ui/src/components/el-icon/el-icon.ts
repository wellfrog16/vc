import type * as Icons from '@element-plus/icons-vue'

export interface IPropType {
    name: keyof typeof Icons
    color?: string
    size?: string | number
}
