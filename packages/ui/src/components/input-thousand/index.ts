import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './input-thousand.vue'

export const VcInputThousand: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcInputThousand
