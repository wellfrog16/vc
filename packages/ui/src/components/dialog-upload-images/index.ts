import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './dialog-upload-images.vue'

export const HDialogUploadImages: SFCWithInstall<typeof Component> = withInstall(Component)
export default HDialogUploadImages
