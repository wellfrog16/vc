import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './flag.vue'

export const HFlag: SFCWithInstall<typeof Component> = withInstall(Component)
export default HFlag
