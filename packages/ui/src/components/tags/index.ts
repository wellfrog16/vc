import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './tags.vue'

export const HTags: SFCWithInstall<typeof Component> = withInstall(Component)
export default HTags
