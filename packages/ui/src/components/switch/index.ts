import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './switch.vue'

export const HSwitch: SFCWithInstall<typeof Component> = withInstall(Component)
export default HSwitch
