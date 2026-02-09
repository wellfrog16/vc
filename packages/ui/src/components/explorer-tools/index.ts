import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './explorer-tools.vue'

export const VcExplorerTools: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcExplorerTools
