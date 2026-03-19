import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './transfer.vue'

export const VcTransfer: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcTransfer
