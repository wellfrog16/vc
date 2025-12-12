import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './tags.vue'

export const VcTags: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcTags
