import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './single-player.vue'

export const VcSinglePlayer: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcSinglePlayer
