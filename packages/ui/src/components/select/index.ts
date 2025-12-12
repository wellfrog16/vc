import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './select.vue'

export const VcSelect: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcSelect
