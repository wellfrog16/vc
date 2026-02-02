import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './splitter-panel.vue'

export const VcSplitterPanel: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcSplitterPanel
