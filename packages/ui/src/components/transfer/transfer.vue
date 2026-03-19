<template>
    <ElPopover :visible="popoverVisible" placement="bottom" :popper-class="$style.popover">
        <div ref="containerRef" :class="$style.container">
            <VcTransferPanel v-model="myValue" :data="data" />
        </div>
        <template #reference>
            <div :class="$style.wrapper" @click.capture="handleSelectClick">
                <VcSelect
                    v-model="myValue"
                    :block="block"
                    :placeholder="placeholder"
                    :class="[$style.select, selectClassName]"
                    :options="data"
                    :disabled="formDisabled"
                    v-bind="{ ...$attrs, multiple: true }"
                    :popper-class="$style.popper"
                />
            </div>
        </template>
    </ElPopover>
</template>

<script setup lang="ts">
import type { ITransferEmits, ITransferProps } from './transfer'
import { useFormDisabled } from 'element-plus'
import VcSelect from '../select/select.vue'
import VcTransferPanel from '../transfer-panel/transfer-panel.vue'

const props = withDefaults(defineProps<ITransferProps>(), {
    disabled: undefined,
    placeholder: '请选择',
})
const emits = defineEmits<ITransferEmits>()

const myValue = useVModel(props, 'modelValue', emits)
const [popoverVisible, togglePopoverVisible] = useToggle()
const formDisabled = useFormDisabled()

const handleSelectClick = useThrottleFn(() => { !formDisabled.value && togglePopoverVisible() }, 300)

const myWidth = computed(() => {
    return props.width || (props.block ? '100%' : '240px')
})

// 修复箭头样式
const $style = useCssModule()
const selectClassName = computed(() => ({ [$style['is-active']]: popoverVisible.value, [$style.block]: props.block }))

const containerRef = useTemplateRef('containerRef')
onClickOutside(containerRef, event => {
    let target = event.target as any
    let result = false

    do {
        result = target.classList ? target.classList.contains($style.select) : false
        target = target.parentNode
    } while (result === false && target !== null && target.nodeName !== 'BODY')

    !result && togglePopoverVisible(false)
})
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

.select {
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

.popper {
    display: none !important;
}
</style>
