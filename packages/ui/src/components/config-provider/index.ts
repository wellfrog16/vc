import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './config-provider.vue'

export const VcConfigProvider: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcConfigProvider
