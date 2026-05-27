import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './form-item.vue'

export const VcFormItem: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcFormItem
