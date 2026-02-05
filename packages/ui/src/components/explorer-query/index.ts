import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './explorer-query.vue'

export const VcExplorerQuery: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcExplorerQuery
