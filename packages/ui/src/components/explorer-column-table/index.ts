import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './explorer-column-table.vue'

export const VcExplorerColumnTable: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcExplorerColumnTable
