import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './dual-pane.vue'

export const VcDualPane: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcDualPane
