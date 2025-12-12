import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './switch.vue'

export const VcSwitch: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcSwitch
