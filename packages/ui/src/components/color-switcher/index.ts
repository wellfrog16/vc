import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './color-switcher.vue'

export const VcColorSwitcher: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcColorSwitcher
