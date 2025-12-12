import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './upload-file.vue'

export const VcUploadFile: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcUploadFile
