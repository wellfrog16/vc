import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './upload-file.vue'

export const HUploadFile: SFCWithInstall<typeof Component> = withInstall(Component)
export default HUploadFile
