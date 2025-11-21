import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './qr-code.vue'

export const HQRCode: SFCWithInstall<typeof Component> = withInstall(Component)
export default HQRCode
