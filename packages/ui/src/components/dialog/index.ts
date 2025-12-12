import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './dialog.vue'

export const VcDialog: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcDialog
