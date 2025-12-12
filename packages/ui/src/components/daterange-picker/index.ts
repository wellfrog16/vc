import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './daterange-picker.vue'

export const VcDaterangePicker: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcDaterangePicker
