import type { Ref } from 'vue'
import { useInject } from '@/use/useStore'

export interface IExplorerProps {
    layout?: 'horizontal' | 'vertical'
    lazy?: boolean
    explorerKey?: string // 记录子组件功能的状态，比如搜索展开还是收起，确保刷新后能记住上次的状态
}

export interface IExplorerState {
    fullscreenTarget: Ref<HTMLElement> // 全屏的目标 div
    key: string // explorer 唯一 key
}

export const KEY_NAME = Symbol('VCExplorerState')
export const injectExplorerState = () => useInject<IExplorerState>(KEY_NAME)
