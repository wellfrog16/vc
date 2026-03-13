import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './explorer-dialog-form.vue'

export const VcExplorerDialogForm: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcExplorerDialogForm
