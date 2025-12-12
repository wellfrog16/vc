import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './input-number.vue'

export const VcInputNumber: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcInputNumber
