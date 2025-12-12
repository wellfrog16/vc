import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './svg-icon.vue'

export const VcSVGIcon: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcSVGIcon
