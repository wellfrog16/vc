import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './explorer-panel.vue'

export const VcExplorerPanel: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcExplorerPanel
