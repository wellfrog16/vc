import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './awesome-icon.vue'

export const VcAwesomeIcon: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcAwesomeIcon
