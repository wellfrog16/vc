import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './scrollbar.vue'

export const VcScrollbar: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcScrollbar
