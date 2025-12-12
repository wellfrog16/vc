import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './backbottom.vue'

export const VcBackbottom: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcBackbottom
