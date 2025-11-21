import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './tree-picker.vue'

export const HTreePicker: SFCWithInstall<typeof Component> = withInstall(Component)
export default HTreePicker
