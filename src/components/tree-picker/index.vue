<template>
    <ElPopover
        ref="myPopover"
        :visible="popoverVisible"
        placement="bottom"
        :popper-class="$style.popover"
        @before-enter="() => toggleCascaderVisible()"
        @after-leave="() => toggleCascaderVisible()"
    >
        <div v-click-outside="clickOutSideTogglePopover" :class="$style.wrapper">
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
                @click="!loading && !disabled && togglePopoverVisible()"
                @clear="clear"
            />
        </template>
    </ElPopover>
</template>

<script lang="ts" setup>
import { computed, nextTick, onBeforeMount, ref, useCssModule, watch } from 'vue'
import { storage, tree } from '@wfrog/utils'
import { get } from 'lodash-es'
import { useToggle } from '@vueuse/core'
import { ElCascaderPanel, ElPopover, ElScrollbar, ElSelect, ElTree, ClickOutside as vClickOutside } from 'element-plus'
import type { ElCascader } from 'element-plus'
import type { PropType } from 'vue'

import type { CascaderOption, CascaderProps, CascaderValue } from 'element-plus/es/components/cascader-panel/src/node.d'
import type { TreeOptionProps } from 'element-plus/es/components/tree/src/tree.type.d'

const props = defineProps({
    name: { type: String, default: '' },
    width: { type: String, default: '202px' },
    placeholder: { type: String, default: '?????????' },
    loadingText: { type: String, default: '?????????' },
    emptyText: { type: String, default: '????????????' },
    disabled: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    modelValue: { type: [String, Array] as PropType<string | number | string[] | number[]>, required: true },
    options: { type: [Array, Function] as PropType<CascaderOption[] | (() => Promise<CascaderOption[]>)>, default: () => [] },
    props: { type: Object as PropType<CascaderProps>, default: () => {} },
    expires: { type: [Date, Number] as PropType<Date | number>, default: 60 * 60 * 2 },
})

const emits = defineEmits(['update:modelValue', 'change', 'init'])

const [popoverVisible, togglePopoverVisible] = useToggle()
const [cascaderVisible, toggleCascaderVisible] = useToggle()
const loading = ref(false)
const asyncOptions = ref<CascaderOption[]>()

// ???????????????props???????????????multiple
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
    get: () => { return props.modelValue },
    set: val => emits('update:modelValue', val),
})

const myOptions = computed(() => Array.isArray(props.options) ? props.options : asyncOptions.value || [])
const myPlaceholder = computed(() => loading.value ? props.loadingText : props.placeholder)

const selectValue = computed({
    get() {
        let val = props.modelValue

        // ????????????????????????????????????????????????value
        if (props.multiple) {
            val = get(props, 'modelValue[0]') || []
        }

        // ??????value?????????label??????
        const node = tree.getPath(myOptions.value, item => item[cascaderProps.value.value] === val)
        const labels = node.map(item => item[cascaderProps.value.label])

        // ????????????value?????????select??????[' ?????? / ?????? ', '????????????1', '????????????2']
        // ?????????select???????????????????????? ?????? / ??????  +2
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

// popover??????????????????
// const mySelect = ref<InstanceType<typeof ElSelect>>()
const mySelect = ref<any>() // ????????????????????????
const clickOutSideTogglePopover = (event: any) => {
    !event.path.includes(mySelect.value?.$el) && togglePopoverVisible(false)
}

// ??????popover??????
// const myPopover = ref<InstanceType<typeof ElPopover>>()
const myPopover = ref<any>()
const updatePopper = () => nextTick(() => {
    myPopover.value?.popperRef?.popperInstanceRef.update()
})

// ??????????????????????????????
const filterNode = (value: CascaderValue[], data: CascaderOption) => {
    if (!value) { return true }
    return value.includes(data[cascaderProps.value.value] as string)
}

// ????????????el-tree????????????filterNode
const myTree = ref<InstanceType<typeof ElTree>>()
const filterTree = (val: CascaderValue) => {
    nextTick(() => myTree.value?.filter(val))
    updatePopper()
}

// ???????????????change??????
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

// ??????????????????
const $style = useCssModule()
const selectClassName = computed(() => ({ [$style['is-active']]: popoverVisible.value }))

// ?????????????????????????????????
const clear = () => {
    emits('update:modelValue', props.multiple ? [] : '')
    props.multiple && filterTree([])
}

// ??????????????????????????????????????????
watch(popoverVisible, val => {
    val && props.multiple && filterTree(props.modelValue || '')
})

const init = async () => {
    // ????????????
    if (Array.isArray(props.options)) { return }

    // ????????????
    const name = `tree-picker-${props.name}`
    // ????????????storage??????
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

        // ????????????
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
    width: v-bind(width);

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
            transform: rotateZ(0) !important;
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
