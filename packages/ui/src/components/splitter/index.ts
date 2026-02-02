import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './splitter.vue'

export const VcSplitter: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcSplitter
