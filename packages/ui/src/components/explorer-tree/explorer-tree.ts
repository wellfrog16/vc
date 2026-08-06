import type { TreeComponentProps } from 'element-plus'
import type Node from 'element-plus/lib/components/tree/src/model/node'
import type { ComponentInternalInstance } from 'vue'
import type { IButtonProps } from '../button/button'

export interface IExplorerTreeProps {
    data?: TreeComponentProps['data']
    actions?: ('create' | 'modify' | 'remove' | 'up' | 'down' | 'action')[]
    treeProps?: Partial<TreeComponentProps>
    emptyText?: string
    defaultExpandAll?: boolean
    pending?: boolean
    loading?: boolean
    loadingText?: string
    confirmParams?: (node: Node) => IButtonProps['confirm']
    filterMethod?: TreeComponentProps['filterNodeMethod']
    highlightCurrent?: boolean
    cancelHighlight?: boolean // 点击已高亮 item 是否取消高亮
    disabled?: boolean | ((action: string, node: Node) => boolean)
}

export interface IExplorerTreeEmits {
    (e: 'nodeClick', value: string | number | undefined, node: Node, instance: ComponentInternalInstance | null, event: MouseEvent): void
    (e: 'create', value: string | number, node: Node): void
    (e: 'modify', value: string | number, node: Node): void
    (e: 'remove', value: string | number, node: Node): void
    (e: 'up', value: string | number, node: Node): void
    (e: 'down', value: string | number, node: Node): void
}
