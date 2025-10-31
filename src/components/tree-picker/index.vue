<template>
    <ElPopover ref="popoverRef" :visible="popoverVisible && !keyword" placement="bottom" :popper-class="$style.popover" :disabled="filterable && !!keyword">
        <div ref="containerRef" :class="$style.container">
            <PopoverCascader
                v-model="myValue"
                :options="options"
                :props="cascaderProps"
                v-bind="$attrs"
                :multiple="multiple"
                @expand-change="updatePopper"
                @choiced="togglePopoverVisible(false)"
                @change="(val, node) => emits('change', val, node)"
            />
        </div>
        <template #reference>
            <div :class="$style.wrapper" @click.capture="handleSelectClick" @keyup="handleKeyup">
                <ElCascader
                    v-model="myValue"
                    collapse-tags
                    collapse-tags-tooltip
                    clearable
                    :options="options"
                    :placeholder="placeholder"
                    :filterable="filterable"
                    :props="cascaderProps"
                    :class="[selectClassName, $style.cascader]"
                    :popper-class="{ [$style['cascader-popover']]: !filterable || !keyword, [$style['cascader-panel']]: !!keyword }"
                    v-bind="$attrs"
                    @clear="clear"
                    @blur="keyword = ''"
                >
                    <template #empty>{{ filterEmptyText }}</template>
                </ElCascader>
            </div>
        </template>
    </ElPopover>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, useCssModule, useTemplateRef } from 'vue'
import { onClickOutside, useThrottleFn, useToggle, useVModel } from '@vueuse/core'
import { ElCascader, ElPopover } from 'element-plus'

import PopoverCascader from './popover-cascader.vue'

import type { CascaderNode, CascaderOption, CascaderProps, CascaderValue } from 'element-plus/es/components/cascader-panel'

interface IPropType {
    emptyText?: string
    placeholder?: string
    disabled?: boolean
    multiple?: boolean
    modelValue: string | number | string[] | number[] | undefined
    options: CascaderOption[]
    props?: CascaderProps
    width?: string
    block?: boolean
    filterable?: boolean
    filterEmptyText?: string
}

const props = withDefaults(defineProps<IPropType>(), {
    placeholder: '请选择',
    disabled: false,
    multiple: false,
    options: () => [],
    props: () => ({}),
    filterEmptyText: '没有匹配到数据',
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: string | number | string[] | number[] | undefined): void
    (e: 'change', value: CascaderValue | null | undefined, node?: CascaderNode[]): void
}>()

const myValue = useVModel(props, 'modelValue', emits)
const [popoverVisible, togglePopoverVisible] = useToggle()

const handleSelectClick = useThrottleFn(() => !props.disabled && togglePopoverVisible(), 300)

// 级联选择的props，便于设置multiple
const cascaderProps = computed(() => ({
    label: props.props.label || 'label',
    value: props.props.value || 'value',
    children: props.props.children || 'children',
    multiple: props.multiple,
    emitPath: false,
    ...props.props,
}))

const myWidth = computed(() => {
    return props.width || (props.block ? '100%' : '214px')
})

// 修复箭头样式
const $style = useCssModule()
const selectClassName = computed(() => ({ [$style['is-active']]: popoverVisible.value, [$style.block]: props.block }))

const containerRef = useTemplateRef('containerRef')
onClickOutside(containerRef, event => {
    let target = event.target as any
    let result = false

    do {
        result = target.classList ? target.classList.contains($style.cascader) : false
        target = target.parentNode
    } while (result === false && target !== null && target.nodeName !== 'BODY')

    !result && togglePopoverVisible(false)
})

// 更新popover布局
const popoverRef = useTemplateRef('popoverRef')
const updatePopper = () => nextTick(() => {
    popoverRef.value!.popperRef!.popperInstanceRef?.update()
})

const keyword = ref('')
const handleKeyup = (event: KeyboardEvent) => {
    keyword.value = (event.target as HTMLInputElement).value
}

// 清除事件，清除所有数据
const clear = () => {
    emits('update:modelValue', props.multiple ? [] : '')
    setTimeout(() => {
        nextTick(() => togglePopoverVisible(false))
    }, 0)
}
</script>

<style lang="scss" module>
.popover {
    width: auto !important;
    min-width: 80px !important;
}

.container {
    display: flex;

    :global(.el-cascader-menu) {
        min-width: 80px;
    }
}

.wrapper {
    display: inline-block;
    width: unset;
    min-width: v-bind(myWidth);

    &.block {
        display: block;
        width: v-bind(myWidth);
    }

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
