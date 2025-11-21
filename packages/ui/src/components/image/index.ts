import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './image.vue'

export const HImage: SFCWithInstall<typeof Component> = withInstall(Component)
export default HImage
