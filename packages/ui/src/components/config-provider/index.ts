import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './config-provider.vue'

export const HConfigProvider: SFCWithInstall<typeof Component> = withInstall(Component)
export default HConfigProvider
