import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './explorer-modal-form.vue'

export const VcExplorerDialogForm: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcExplorerDialogForm
