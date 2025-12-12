import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './cropper.vue'

export const VcCropper: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcCropper
