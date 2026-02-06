import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './explorer-tree.vue'

export const VcExplorerTree: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcExplorerTree
