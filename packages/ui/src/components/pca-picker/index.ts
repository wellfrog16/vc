import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './pca-picker.vue'

export const VcPCAPicker: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcPCAPicker
