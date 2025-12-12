import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './dialog-map-point.vue'

export const VcDialogMapPoint: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcDialogMapPoint
