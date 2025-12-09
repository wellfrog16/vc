import type * as Icons from '@element-plus/icons-vue'

export interface IElIconProps {
    name: keyof typeof Icons
    color?: string
    size?: string | number
}
