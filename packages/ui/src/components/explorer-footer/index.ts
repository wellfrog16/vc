import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './explorer-footer.vue'

export const VcExplorerFooter: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcExplorerFooter
