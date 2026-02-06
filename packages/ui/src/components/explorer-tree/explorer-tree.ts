import type { TreeComponentProps } from 'element-plus'
import type Node from 'element-plus/lib/components/tree/src/model/node'
import type { ComponentInternalInstance } from 'vue'

export interface IExplorerTreeProps {
    data?: TreeComponentProps['data']
    actions?: ('create' | 'modify' | 'delete')[]
    treeProps?: TreeComponentProps
    emptyText?: string
    defaultExpandAll?: boolean
    group?: string
    loading?: boolean
    loadingText?: string
}

export interface IExplorerTreeEmits {
    (e: 'nodeClick', value: string | number, node: Node, instance: ComponentInternalInstance | null, event: MouseEvent): void
}
