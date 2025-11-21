import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './currency.vue'

export const HCurrency: SFCWithInstall<typeof Component> = withInstall(Component)
export default HCurrency
