import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './tinymce.vue'

export const HTinymce: SFCWithInstall<typeof Component> = withInstall(Component)
export default HTinymce
