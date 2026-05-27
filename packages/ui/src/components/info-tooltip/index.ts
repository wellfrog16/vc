import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './info-tooltip.vue'

export const VcInfoTooltip: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcInfoTooltip
