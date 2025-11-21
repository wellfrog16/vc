import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './dialog-camera-upload.vue'

export const HDialogCameraUpload: SFCWithInstall<typeof Component> = withInstall(Component)
export default HDialogCameraUpload
