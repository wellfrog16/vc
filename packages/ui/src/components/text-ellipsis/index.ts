import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './text-ellipsis.vue'

export const VcTextEllipsis: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcTextEllipsis
