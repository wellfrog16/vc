import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './input.vue'

export const HInput: SFCWithInstall<typeof Component> = withInstall(Component)
export default HInput
