import type { Ref } from 'vue'
import { useInject } from '@/use/useStore'

export interface IExplorerProps {
    layout?: 'horizontal' | 'vertical'
    lazy?: boolean
    explorerKey: string // 记录子组件功能的状态，比如搜索展开还是收起，确保刷新后能记住上次的状态
}

export interface IExplorerState {
    filterKeyword: Ref<Record<string, string>>
    fullscreenTarget: Ref<Record<string, HTMLElement>>
    key: string
}

export const KEY_NAME = Symbol('VCExplorerState')
export const injectState = () => useInject<IExplorerState>(KEY_NAME)
