import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './explorer-table.vue'

export const VcExplorerTable: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcExplorerTable
