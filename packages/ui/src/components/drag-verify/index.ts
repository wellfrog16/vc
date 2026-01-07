import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './drag-verify.vue'

export const VcDragVerify: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcDragVerify
