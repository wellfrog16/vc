import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './iconify-icon.vue'

export const VcIconifyIcon: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcIconifyIcon
