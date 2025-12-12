import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './dialog-upload-images.vue'

export const VcDialogUploadImages: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcDialogUploadImages
