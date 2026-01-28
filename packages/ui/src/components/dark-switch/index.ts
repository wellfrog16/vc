import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './dark-switch.vue'

export const VcDarkSwitch: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcDarkSwitch
