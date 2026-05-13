import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './explorer-panel.vue'

export * from './explorer-panel'
export const VcExplorerPanel: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcExplorerPanel
