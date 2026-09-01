import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './thousand-separator.vue'

export const VcThousandSeparator: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcThousandSeparator
