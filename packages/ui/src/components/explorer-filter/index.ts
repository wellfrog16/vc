import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './explorer-filter.vue'

export const VcExplorerFilter: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcExplorerFilter
