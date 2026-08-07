<template>
    <ElPopover :visible="popoverVisible && !keyword" placement="bottom" :popper-class="$style.popover" :disabled="filterable && !!keyword">
        <div ref="containerRef" :class="$style.container">
            <ElScrollbar :view-class="$style['scrollbar-view']">
                <ElTree
                    ref="treeRef"
                    :data="options"
                    :node-key="valueKey"
                    :props="props.props"
                    :empty-text="emptyText"
                    :show-checkbox="multiple"
                    :check-on-click-node="multiple"
                    :expand-on-click-node="!multiple && !checkStrictly"
                    :default-expand-all="true"
                    :highlight-current="!multiple"
                    :check-strictly="checkStrictly"
                    @check="handleCheck"
                    @node-click="handleNodeClick"
                />
            </ElScrollbar>
        </div>
        <template #reference>
            <div :class="wrapperClassName" @click.capture="handleSelectClick" @keyup="handleKeyup">
                <ElCascader
                    v-model="myValue"
                    collapse-tags
                    collapse-tags-tooltip
                    :clearable="clearable"
                    :options="options"
                    :placeholder="placeholder"
                    :filterable="filterable"
                    :props="cascaderProps"
                    :class="[selectClassName, $style.cascader]"
                    :popper-class="{ [$style['cascader-popover']]: !filterable || !keyword, [$style['cascader-panel']]: !!keyword }"
                    :disabled="formDisabled"
                    v-bind="$attrs"
                    @clear="clear"
                    @blur="handleBlur"
                >
                    <template #empty>{{ filterEmptyText }}</template>
                </ElCascader>
            </div>
        </template>
    </ElPopover>
</template>

<script lang="ts" setup>
import type { TreeNodeData } from 'element-plus'
import type { ITreeSelectEmits, ITreeSelectProps, TreeSelectValue } from './tree-select'
import { useFormDisabled, useFormItem } from 'element-plus'
import { formatToPx } from '@/utils'

const props = withDefaults(defineProps<ITreeSelectProps>(), {
    placeholder: '请选择',
    disabled: undefined,
    multiple: false,
    options: () => [],
    props: () => ({}),
    filterEmptyText: '没有匹配到数据',
    emptyText: '暂无数据',
    clearable: true,
})

const emits = defineEmits<ITreeSelectEmits>()

const myValue = useVModel(props, 'modelValue', emits)
const [popoverVisible, togglePopoverVisible] = useToggle()
const formDisabled = useFormDisabled()
const { formItem } = useFormItem()

const valueKey = computed(() => props.props.value || 'value')

// 合并 ElCascader 与 ElTree 共用的 props；emitPath: false 保证 v-model 绑定的是叶子节点值
const cascaderProps = computed(() => ({
    value: valueKey.value,
    multiple: props.multiple,
    emitPath: false,
    checkStrictly: props.checkStrictly,
    ...props.props,
}))

// 修复箭头样式
const $style = useCssModule()
const selectClassName = computed(() => ({ [$style['is-active']]: popoverVisible.value }))
const wrapperClassName = computed(() => ({ [$style['cascader-width']]: !!props.width }))
const myWidth = computed(() => props.width ? formatToPx(props.width) : 'auto')

const keyword = ref('')

// 触发 change 事件并执行表单校验
function handleChange(node: any) {
    formItem?.validate?.('change').catch(() => {})
    emits('change', myValue.value, node)
}

const treeRef = useTemplateRef('treeRef')
// 将 modelValue 同步到 ElTree 的选中/高亮状态，组件挂载和后续值变化时都会调用
function syncTreeState(val?: TreeSelectValue) {
    nextTick(() => {
        if (props.multiple) {
            treeRef.value?.setCheckedKeys(Array.isArray(val) ? val : [], false)
        }
        else {
            treeRef.value?.setCurrentKey(val as string | number | null, true)
        }
    })
}
watch(() => myValue.value, syncTreeState)
onMounted(() => syncTreeState(myValue.value))

// 多选模式下，树节点勾选状态变化时同步更新 modelValue
function handleCheck() {
    if (!props.multiple) { return }
    const checkedKeys = treeRef.value?.getCheckedKeys(!props.checkStrictly) || []
    myValue.value = checkedKeys
    const checkedNodes = treeRef.value?.getCheckedNodes(!props.checkStrictly) || []
    handleChange(checkedNodes)
}

// 单选模式下，点击树节点时选中当前节点（checkStrictly 为 true 时可选择任意节点，否则仅叶子节点）
function handleNodeClick(data: TreeNodeData, node: any) {
    if (props.multiple) { return }

    if (props.checkStrictly || node.isLeaf) {
        myValue.value = data[valueKey.value] as string | number
        handleChange(node)
        togglePopoverVisible(false)
    }
}

const containerRef = useTemplateRef('containerRef')
// 点击树面板外部时关闭弹窗；若点击的是输入框本身，则保持打开（由输入框的 click 事件控制开关）
onClickOutside(containerRef, event => {
    let target = event.target as any
    let result = false

    do {
        result = target.classList ? target.classList.contains($style.cascader) : false
        target = target.parentNode
    } while (result === false && target !== null && target.nodeName !== 'BODY')

    !result && togglePopoverVisible(false)
})

// 清空所有选中状态并关闭弹窗
function clear() {
    myValue.value = props.multiple ? [] : undefined
    treeRef.value?.setCheckedKeys([], false)
    togglePopoverVisible(false)
}

// 输入框过滤时同步 keyword 并调用 ElTree.filter 过滤树节点
function handleKeyup(event: KeyboardEvent) {
    keyword.value = (event.target as HTMLInputElement).value
}

// 点击输入框时切换树面板显隐；过滤输入期间不关闭，避免打断输入
// const handleSelectClick = useThrottleFn(() => {
//     if (formDisabled.value || (props.filterable && keyword.value)) { return }
//     togglePopoverVisible()
// }, 300)
const handleSelectClick = useThrottleFn(() => !formDisabled.value && togglePopoverVisible(), 300)

// 输入框失焦时触发 blur 事件、执行表单校验并清空过滤关键字
function handleBlur(event: FocusEvent) {
    formItem?.validate?.('blur').catch(() => {})
    setTimeout(() => { keyword.value = '' }, 300)
    emits('blur', event)
}
</script>

<style lang="scss" module>
.popover {
    width: auto !important;
    min-width: 80px !important;
    padding: 0 !important;
}

.container {
    min-width: 240px;
    width: fit-content;
    height: 225px;

    :global(.el-tree-node__content) {
        padding-right: 32px;
    }

    :global(.el-scrollbar__wrap) {
        overflow-x: hidden;
    }
}

.scrollbar-view {
    padding: 4px 0;
}

.wrapper {
    width: v-bind(myWidth);

    :global(.el-tag .el-icon) {
        display: none;
    }
}

.cascader {
    width: 100%;

    :global {
        .el-input__wrapper.is-focus {
            box-shadow: 0 0 0 1px var(--el-input-focus-border-color, var(--el-color-primary)) inset !important;
        }
    }
}

.cascader-width {
    width: v-bind(myWidth);
}

.is-active {
    :global {
        .el-input__inner {
            border-color: var(--color-primary);
        }

        .el-icon {
            transform: rotateZ(-180deg) !important;
        }
    }
}

.cascader-popover {
    &:global(.el-cascader__dropdown) {
        display: none;
    }
}

.cascader-panel {
    :global(.el-cascader-panel) {
        display: none;
    }
}
</style>
