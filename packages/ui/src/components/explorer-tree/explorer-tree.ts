import type { TreeComponentProps } from 'element-plus'
import type Node from 'element-plus/lib/components/tree/src/model/node'
import type { ComponentInternalInstance } from 'vue'
import type { IButtonProps } from '../button/button'

export interface IExplorerTreeProps {
    data?: TreeComponentProps['data']
    actions?: ('create' | 'modify' | 'remove')[]
    treeProps?: TreeComponentProps
    emptyText?: string
    defaultExpandAll?: boolean
    group?: string
    loading?: boolean
    loadingText?: string
    confirmRender?: (node: Node) => IButtonProps['confirm']
    highlightCurrent?: boolean
}

export interface IExplorerTreeEmits {
    (e: 'nodeClick', value: string | number, node: Node, instance: ComponentInternalInstance | null, event: MouseEvent): void
    (e: 'create', value: string | number, node: Node): void
    (e: 'modify', value: string | number, node: Node): void
    (e: 'remove', value: string | number, node: Node): void
}
