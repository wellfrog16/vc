import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './color-switch.vue'

export const VcColorSwitch: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcColorSwitch
