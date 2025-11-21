import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './choice-boolean.vue'

export const HChoiceBoolean: SFCWithInstall<typeof Component> = withInstall(Component)
export default HChoiceBoolean
