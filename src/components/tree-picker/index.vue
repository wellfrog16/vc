<template>
    <ElPopover
        ref="myPopover"
        :visible="popoverVisible"
        placement="bottom"
        :popper-class="$style.popover"
        @before-enter="() => toggleCascaderVisible()"
        @after-leave="() => toggleCascaderVisible()"
    >
        <div ref="myWrapper" :class="$style.wrapper">
            <div v-if="multiple" :class="$style.selected">
                <ElScrollbar>
                    <ElTree
                        ref="myTree"
                        default-expand-all
                        :data="myOptions"
                        :node-key="cascaderProps.value"
                        :props="myTreeProps"
                        :filter-node-method="filterNode"
                        :empty-text="emptyText"
                    />
                </ElScrollbar>
            </div>
            <ElCascaderPanel
                v-if="cascaderVisible"
                ref="myCascader"
                v-model="myValue"
                :props="cascaderProps"
                :options="myOptions"
                v-bind="$attrs"
                @expand-change="updatePopper"
                @change="handleCascaderChange"
            />
        </div>
        <template #reference>
            <ElSelect
                ref="mySelect"
                v-model="selectValue"
                :placeholder="myPlaceholder"
                collapse-tags
                clearable
                :disabled="loading || disabled"
                :multiple="multiple"
                :class="[selectClassName, $style.select]"
                :popper-class="$style['popover-select']"
                @click="handleSelectClick"
                @clear="clear"
            />
        </template>
    </ElPopover>
</template>

<script lang="ts" setup>
import { computed, nextTick, onBeforeMount, ref, useCssModule, watch } from 'vue'
import { storage, tree } from '@wfrog/utils'
import { get } from 'lodash-es'
import { onClickOutside, useThrottleFn, useToggle } from '@vueuse/core'
import { ElCascaderPanel, ElPopover, ElScrollbar, ElSelect, ElTree } from 'element-plus'
import type { PropType } from 'vue'

import type { CascaderOption, CascaderProps, CascaderValue } from 'element-plus/es/components/cascader-panel/src/node.d'
import type { TreeOptionProps } from 'element-plus/es/components/tree/src/tree.type.d'

const props = defineProps({
    name: { type: String, default: '' },
    placeholder: { type: String, default: '请选择' },
    loadingText: { type: String, default: '加载中' },
    emptyText: { type: String, default: '尚未选择' },
    disabled: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    modelValue: { type: [String, Number, Array] as PropType<string | number | string[] | number[]>, required: true },
    options: { type: [Array, Function] as PropType<CascaderOption[] | (() => Promise<CascaderOption[]>)>, default: () => [] },
    props: { type: Object as PropType<CascaderProps>, default: () => {} },
    expires: { type: [Date, Number] as PropType<Date | number>, default: 60 * 60 * 2 },
})

const emits = defineEmits(['update:modelValue', 'change', 'init'])

const [popoverVisible, togglePopoverVisible] = useToggle()
const [cascaderVisible, toggleCascaderVisible] = useToggle()
const loading = ref(false)
const asyncOptions = ref<CascaderOption[]>()

const handleSelectClick = useThrottleFn(() => !loading.value && !props.disabled && togglePopoverVisible(), 300)

// 级联选择的props，便于设置multiple
const cascaderProps = computed(() => ({
    label: 'label',
    value: 'value',
    children: 'children',
    multiple: props.multiple,
    emitPath: false,
    ...props.props,
}))

const myTreeProps = computed<TreeOptionProps>(() => ({
    label: cascaderProps.value.label,
    value: cascaderProps.value.value,
    children: cascaderProps.value.children,
    disabled: '',
}))

const myValue = computed({
    get: () => props.modelValue,
    set: val => emits('update:modelValue', val),
})

const myOptions = computed(() => Array.isArray(props.options) ? props.options : asyncOptions.value || [])
const myPlaceholder = computed(() => loading.value ? props.loadingText : props.placeholder)

const selectValue = computed({
    get() {
        let val = props.modelValue

        // 如果是多选，获取结果数组的第一个value
        if (props.multiple) {
            val = get(props, 'modelValue[0]') || []
        }

        // 获取value对应的label路径
        const node = tree.getPath(myOptions.value, item => item[cascaderProps.value.value] === val)
        const labels = node.map(item => item[cascaderProps.value.label])

        // 多选，用value模拟出select的值[' 食物 / 苹果 ', '这里是值1', '这里是值2']
        // 这样在select的文本框就会显示 食物 / 苹果  +2
        if (props.multiple) {
            if (!labels || labels.length === 0 || !Array.isArray(props.modelValue)) { return }
            const result = [...props.modelValue]
            result[0] = labels.join(' / ')
            return result
        }
        return labels.join(' / ')
    },
    set() {},
})

// 修复箭头样式
const $style = useCssModule()
const selectClassName = computed(() => ({ [$style['is-active']]: popoverVisible.value }))

// popover显示隐藏控制
// const mySelect = ref<InstanceType<typeof ElSelect>>()
const mySelect = ref<any>() // 解决无法生成类型

const myWrapper = ref<any>()
onClickOutside(myWrapper, event => {
    let target = event.target as any
    let result = false

    do {
        result = target.classList ? target.classList.contains($style.select) : false
        target = target.parentNode
    } while (result === false && target !== null && target.nodeName !== 'BODY')

    !result && togglePopoverVisible(false)
})

// 更新popover宽度
// const myPopover = ref<InstanceType<typeof ElPopover>>()
const myPopover = ref<any>()
const updatePopper = () => nextTick(() => {
    myPopover.value?.popperRef?.popperInstanceRef.update()
})

// 过滤复选选择的树节点
const filterNode = (value: CascaderValue[], data: CascaderOption) => {
    if (!value) { return true }
    return value.includes(data[cascaderProps.value.value] as string)
}

// 树过滤，el-tree内部调用filterNode
const myTree = ref<InstanceType<typeof ElTree>>()
const filterTree = (val: CascaderValue) => {
    nextTick(() => myTree.value?.filter(val))
    updatePopper()
}

// 级联选择的change事件
// const myCascader = ref<InstanceType<typeof ElCascader>>()
const myCascader = ref<any>()
const handleCascaderChange = (val: CascaderValue) => {
    const node = myCascader.value?.getCheckedNodes(true)
    emits('change', val, node)
    if (!props.multiple) {
        togglePopoverVisible()
    }
    else {
        filterTree(val)
    }
}

// 清除事件，清除所有数据
const clear = () => {
    emits('update:modelValue', props.multiple ? [] : '')
    props.multiple && filterTree([])
}

// 展开时，显示已选择的树形结构
watch(popoverVisible, val => {
    val && props.multiple && filterTree(props.modelValue || '')
})

const init = async () => {
    // 同步数据
    if (Array.isArray(props.options)) { return }

    // 异步数据
    const name = `tree-picker-${props.name}`
    // 尝试读取storage缓存
    if (props.name) {
        const val = storage.get(name) as CascaderOption[]

        if (val) {
            asyncOptions.value = val
            emits('init', val)
            return
        }
    }

    loading.value = true
    try {
        asyncOptions.value = await props.options()

        // 写入缓存
        props.name && storage.set(name, asyncOptions.value, { expires: props.expires })
        emits('init', asyncOptions.value)
    }
    finally {
        loading.value = false
    }
}

onBeforeMount(() => init())
</script>

<style lang="scss" module>
.popover {
    width: auto !important;
    min-width: 80px !important;
}

.wrapper {
    display: flex;

    :global(.el-cascader-menu) {
        min-width: 80px;
    }
}

.select {
    :global(.el-tag .el-icon) {
        display: none;
    }
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

.selected {
    box-sizing: border-box;
    flex: 1 1 180px;
    min-width: 180px;
    height: 206px;
    margin-right: 8px;
    border: 1px solid #e4e7ed;
    border-radius: 4px;

    :global {
        .el-scrollbar {
            height: 100%;
        }

        .el-tree {
            height: 100%;
            margin: 6px 20px 6px 0;
        }

        .el-scrollbar__wrap {
            overflow-x: hidden;
        }

        .el-tree__empty-block {
            transform: translateX(10px);
        }
    }
}

.popover-select {
    display: none;
}
</style>
