import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './explorer-container.vue'

export const VcExplorerContainer: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcExplorerContainer
