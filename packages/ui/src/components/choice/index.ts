import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './choice.vue'

export const HChoice: SFCWithInstall<typeof Component> = withInstall(Component)
export default HChoice
