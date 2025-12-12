import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './qr-code.vue'

export const VcQRCode: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcQRCode
