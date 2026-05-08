<template>
    <VcScrollbar always :class="$style.scrollbar">
        <ElTree v-show="!loading && !pending" ref="treeRef" :data="treeData" v-bind="{ ...$attrs, ...treeProps }" :class="$style.tree" :filter-node-method="filterNode" @node-click="handleNodeClick">
            <template #default="{ node }">
                <slot name="node" :data="node.data" :index="node.index">
                    <div :class="$style.node">
                        <div :class="$style.label">
                            <slot :data="node.data" :index="node.index" name="label"><VcIconifyIcon v-if="node.data.icon" :name="node.data.icon" />{{ node.data.label }}</slot>
                        </div>
                        <div v-if="actions.length" class="vc-actions" :class="[$style.actions]">
                            <template v-for="action in actions" :key="action">
                                <slot v-if="action === 'action'" name="action" :data="node.data" :index="node.index" />
                                <VcButton
                                    v-else
                                    v-bind="actionsMapping[action]"
                                    :confirm="action === 'remove' ? confirmParams(node) : undefined"
                                    :class="action === 'remove' ? $style.remove : undefined"
                                    link
                                    :icon="{ type: 'el', name: actionsMapping[action].icon }"
                                    stop
                                    :disabled="formDisabled"
                                    @click="emits(action as any, node.data.value, node)"
                                />
                            </template>
                        </div>
                        <slot :data="node.data" :index="node.index" name="extra-label" />
                    </div>
                </slot>
            </template>
        </ElTree>
        <div v-if="loading" :class="$style.loading">
            <ElIcon class="is-loading"><Loading /></ElIcon>{{ loadingText }}
        </div>
    </VcScrollbar>
</template>

<script setup lang="ts">
import type { TreeNodeData } from 'element-plus'
import type Node from 'element-plus/lib/components/tree/src/model/node'
import type { ComponentInternalInstance } from 'vue'
import type { IExplorerTreeEmits, IExplorerTreeProps } from './explorer-tree'
import { Loading } from '@element-plus/icons-vue'
import { tree as treeFun } from '@wfrog/vc-utils'
import { useFormDisabled } from 'element-plus'
import { cloneDeep } from 'lodash-es'
import VcButton from '../button/button.vue'
import { injectExplorerPanelState } from '../explorer-panel/explorer-panel'
import VcIconifyIcon from '../iconify-icon/iconify-icon.vue'
import VcScrollbar from '../scrollbar/scrollbar.vue'

const props = withDefaults(defineProps<IExplorerTreeProps>(), {
    actions: () => [],
    emptyText: '没有数据',
    defaultExpandAll: true,
    loadingText: '数据加载中...',
    highlightCurrent: true,
    confirmParams: (node: Node) => {
        return { msg: `确定要删除 ${node.data.label} 吗？` }
    },
    disabled: undefined,
})
const emits = defineEmits<IExplorerTreeEmits>()

const treeRef = useTemplateRef('treeRef')
const { filterKeyword } = injectExplorerPanelState()
const formDisabled = useFormDisabled()

const actionsMapping: Record<string, any> = {
    create: { title: '新增', type: 'primary', icon: 'Plus' },
    modify: { title: '修改', type: 'primary', icon: 'Edit' },
    remove: { title: '删除', type: 'danger', icon: 'Delete' },
    up: { title: '上移', type: 'success', icon: 'Top' },
    down: { title: '下移', type: 'success', icon: 'Bottom' },
}

const treeProps = computed(() => ({
    emptyText: props.emptyText,
    defaultExpandAll: props.defaultExpandAll,
    expandOnClickNode: false,
    highlightCurrent: props.highlightCurrent,
    filterNodeMethod: props.filterMethod,
    nodeKey: 'value',
    ...props.treeProps,
}))

const treeData = computed(() => {
    if (formDisabled.value) {
        const copyData = cloneDeep(props.data)
        treeFun.traverse<any>(copyData || [], node => { node.disabled = true })
        return copyData
    }
    return props.data
})

function filterNode(value: string, data: TreeNodeData) {
    if (!value || !filterKeyword.value) { return true }

    return data.label?.toLowerCase().includes(value.toLowerCase()) ?? false
}

function handleNodeClick(data: any, node: Node, instance: ComponentInternalInstance | null, event: MouseEvent) {
    emits('nodeClick', data.value, node, instance, event)
}

const filterWatch = watch(filterKeyword, value => treeRef.value?.filter(value))

defineExpose({
    treeRef,
    setActive: (value: string | number | null, shouldAutoExpandParent = true) => {
        treeRef.value?.setCurrentKey(value, shouldAutoExpandParent)
    },
})

onBeforeUnmount(() => {
    filterWatch.stop()
})
</script>

<style lang="scss" module>
.tree {
    // --el-tree-node-content-height: 32px;

    :global {
        .el-tree-node__content {
            display: flex;
            align-items: center;
            // height: auto;

            &:hover {
                background-color: var(--el-color-primary-light-9);

                .vc-actions {
                    display: inline-flex;
                }
            }
        }

        .el-tree-node:focus > .el-tree-node__content {
            background-color: var(--el-color-primary-light-9);
        }

        .is-current {
            > .el-tree-node__content {
                color: var(--el-color-primary);
                background-color: var(--el-color-primary-light-9);
            }
        }

        .el-tree__empty-block {
            text-align: left;
            min-height: unset;
            padding: 4px 8px;
        }

        .el-tree__empty-text {
            position: static;
        }
    }
}

.node {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    padding: 4px 8px 4px 0;
    box-sizing: border-box;
    width: 100px;
}

.label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transform: translateY(-1px);

    :global(.iconify) {
        margin-right: 4px;
    }
}

.actions {
    display: none;
    column-gap: 4px;

    > button {
        margin-left: 0 !important;
        font-size: 1.2em;
        border: 1px solid var(--el-border-color-light) !important;

        &:hover {
            border-color: var(--el-border-color-dark) !important;
        }
    }
}

.remove {
    transform: translateY(-1px);
}

.loading {
    padding: 4px 8px;
    display: flex;
    align-items: center;
    column-gap: 4px;
    color: var(--el-text-color-secondary);
}

.scrollbar {
    margin: 0 -8px;
}
</style>
