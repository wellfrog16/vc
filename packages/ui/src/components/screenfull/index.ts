import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './screenfull.vue'

export const HScreenfull: SFCWithInstall<typeof Component> = withInstall(Component)
export default HScreenfull
