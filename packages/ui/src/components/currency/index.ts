import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './currency.vue'

export const VcCurrency: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcCurrency
