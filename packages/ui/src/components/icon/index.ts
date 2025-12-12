import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './icon.vue'

export const VcIcon: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcIcon
