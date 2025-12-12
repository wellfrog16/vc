import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './drawer.vue'

export const VcDrawer: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcDrawer
