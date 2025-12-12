import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './chat-container.vue'

export const VcChatContainer: SFCWithInstall<typeof Component> = withInstall(Component)
export default VcChatContainer
