import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './dark-switcher.vue'

export const VcDarkSwitcher: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcDarkSwitcher
