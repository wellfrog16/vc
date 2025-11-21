import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './easy-pagination.vue'

export const HEasyPagination: SFCWithInstall<typeof Component> = withInstall(Component)
export default HEasyPagination
