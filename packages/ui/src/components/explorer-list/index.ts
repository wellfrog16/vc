import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './explorer-list.vue'

export const VcExplorerList: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcExplorerList
