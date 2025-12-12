import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './sync-scroll-container.vue'

export const VcSyncScrollContainer: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcSyncScrollContainer
