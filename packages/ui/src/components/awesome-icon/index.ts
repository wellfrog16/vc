import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './awesome-icon.vue'

export const HAwesomeIcon: SFCWithInstall<typeof Component> = withInstall(Component)
export default HAwesomeIcon
