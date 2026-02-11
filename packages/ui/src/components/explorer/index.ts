import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './explorer.vue'

export const VcExplorer: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcExplorer
