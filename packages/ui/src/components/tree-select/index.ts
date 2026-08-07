import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './tree-select.vue'

export const VcTreeSelect: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcTreeSelect
