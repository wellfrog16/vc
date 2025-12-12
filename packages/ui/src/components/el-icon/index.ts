import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './el-icon.vue'

export const VcElIcon: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcElIcon
