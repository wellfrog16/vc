import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './gen-input.vue'

export const VcGenInput: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcGenInput
