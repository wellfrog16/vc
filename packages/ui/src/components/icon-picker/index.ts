import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './icon-picker.vue'

export const VcIconPicker: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcIconPicker
