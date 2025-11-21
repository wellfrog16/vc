import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './thousand-input.vue'

export const HThousandInput: SFCWithInstall<typeof Component> = withInstall(Component)
export default HThousandInput
