import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './transfer-panel.vue'

export const VcTransferPanel: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcTransferPanel
