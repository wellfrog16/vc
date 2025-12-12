import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './image.vue'

export const VcImage: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcImage
