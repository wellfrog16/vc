<template>
    <VcScrollbar always :class="$style.scrollbar">
        <ElTree v-show="treeVisible" ref="treeRef" :data="data" v-bind="treeProps" :class="$style.tree" :filter-node-method="filterNode" @node-click="handleNodeClick">
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
                                    :disabled="myDisabled(action, node)"
                                    @click="emits(action as any, node.data.value, node)"
                                />
                            </template>
                        </div>
                        <slot :data="node.data" :index="node.index" name="extra-label" />
                    </div>
                </slot>
            </template>
        </ElTree>
    </VcScrollbar>
</template>

<script setup lang="ts">
import type { TreeNodeData } from 'element-plus'
import type Node from 'element-plus/lib/components/tree/src/model/node'
import type { ComponentInternalInstance } from 'vue'
import type { IExplorerTreeEmits, IExplorerTreeProps } from './explorer-tree'
import { tree as treeFun } from '@wfrog/vc-utils'
import VcButton from '../button/button.vue'
import { injectExplorerPanelState } from '../explorer-panel/explorer-panel'
import VcIconifyIcon from '../iconify-icon/iconify-icon.vue'
import VcScrollbar from '../scrollbar/scrollbar.vue'

const props = withDefaults(defineProps<IExplorerTreeProps>(), {
    actions: () => [],
    defaultExpandAll: true,
    highlightCurrent: true,
    confirmParams: (node: Node) => {
        return { msg: `确定要删除 ${node.data.label} 吗？` }
    },
    disabled: undefined,
})
const emits = defineEmits<IExplorerTreeEmits>()

const treeRef = useTemplateRef('treeRef')
const { filterKeyword } = injectExplorerPanelState()
const treeVisible = computed(() => Array.isArray(props.data) && props.data.length > 0)

const actionsMapping: Record<string, any> = {
    create: { title: '新增', type: 'primary', icon: 'Plus' },
    modify: { title: '修改', type: 'primary', icon: 'Edit' },
    remove: { title: '删除', type: 'danger', icon: 'Delete' },
    up: { title: '上移', type: 'success', icon: 'Top' },
    down: { title: '下移', type: 'success', icon: 'Bottom' },
}

const treeProps = computed(() => ({
    defaultExpandAll: props.defaultExpandAll,
    expandOnClickNode: false,
    highlightCurrent: props.highlightCurrent,
    filterNodeMethod: props.filterMethod,
    nodeKey: 'value',
    ...props.treeProps,
}))

watch(() => props.disabled, () => {
    if (props.disabled) {
        treeFun.traverse<any>(props.data || [], node => {
            node.originDisabled = node.disabled
            node.disabled = true
        })
    }
    else {
        treeFun.traverse<any>(props.data || [], node => {
            node.disabled = node.originDisabled ?? false
        })
    }
}, { immediate: true })

function filterNode(value: string, data: TreeNodeData) {
    if (!value || !filterKeyword.value) { return true }

    return data.label?.toLowerCase().includes(value.toLowerCase()) ?? false
}

function cancalFocus(event: MouseEvent) {
    let target = event.target as HTMLElement
    do {
        if (target.classList.contains('el-tree-node')) {
            target.blur()
            return
        }
        target = target.parentElement as HTMLElement
    } while (target)
}

const actived = ref<string | number>()
function handleNodeClick(data: any, node: Node, instance: ComponentInternalInstance | null, event: MouseEvent) {
    if (props.cancelHighlight && actived.value === data.value) {
        actived.value = undefined
        emits('nodeClick', undefined, node, instance, event)
        treeRef.value?.setCurrentKey(undefined)
        cancalFocus(event)
        return
    }
    actived.value = data.value
    emits('nodeClick', data.value, node, instance, event)
}

const filterWatch = watch(filterKeyword, value => treeRef.value?.filter(value))
function myDisabled(action: string, node: Node) {
    if (typeof props.disabled === 'function') { return props.disabled(action, node) }
    return props.disabled
}

defineExpose({
    treeRef,
    setActive: (value: string | number | null | undefined, shouldAutoExpandParent = true) => {
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
            align-items: center;
            display: flex;
            // height: auto;

            &:hover {
                background-color: var(--vc-highlight-bg-color, var(--el-fill-color-light));

                .vc-actions {
                    display: inline-flex;
                }
            }
        }

        // .el-tree-node:not(.is-current):focus > .el-tree-node__content {
        //     background-color: inherit;
        // }

        .el-tree-node:focus > .el-tree-node__content {
            background-color: var(--vc-highlight-bg-color, var(--el-fill-color-light));
        }

        .is-current {
            > .el-tree-node__content {
                background-color: var(--vc-highlight-bg-color, var(--el-fill-color-light)) !important;
                color: var(--el-color-primary);
            }
        }

        .el-tree__empty-block {
            box-sizing: border-box;
            min-height: unset;
            padding: 4px 8px;
            text-align: left;
        }

        .el-tree__empty-text {
            position: static;
        }
    }
}

.node {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding: 4px 8px 4px 0;
    width: 100px;
}

.label {
    overflow: hidden;
    text-overflow: ellipsis;
    transform: translateY(-1px);
    white-space: nowrap;

    :global(.iconify) {
        margin-right: 4px;
    }
}

.actions {
    column-gap: 4px;
    display: none;

    > button {
        border: 1px solid var(--el-border-color-light) !important;
        font-size: 1.2em;
        margin-left: 0 !important;

        &:hover {
            border-color: var(--el-border-color-dark) !important;
        }
    }
}

.remove {
    transform: translateY(-1px);
}

.scrollbar {
    margin: 0 -8px;
}
</style>
