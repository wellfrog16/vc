import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './button.vue'

export const HButton: SFCWithInstall<typeof Component> = withInstall(Component)
export default HButton
