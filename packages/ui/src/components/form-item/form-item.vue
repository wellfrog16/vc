<template>
    <ElFormItem :class="$style['form-item']">
        <template #label>
            <div :class="$style['label-wrapper']">
                <span :class="$style['label-container']">
                    <VcInfoTooltip v-if="noEdit" content="创建后无法修改" offset-y="0px" icon="carbon:locked" :icon-class="$style['no-edit-icon']" />
                    <span :class="$style.label">{{ label }}</span>
                    <VcInfoTooltip v-bind="infoTooltipProps" offset-y="0px" @click="handleClick" />
                </span>
                <div :class="$style['label-extra']"><slot name="label-extra" /></div>
            </div>
        </template>
        <template #default>
            <slot />
        </template>
        <template #error>
            <slot name="error" />
        </template>
    </ElFormItem>
</template>

<script setup lang="ts">
import type { IFormItemEmits, IFormItemProps } from './form-item'
import VcInfoTooltip from '../info-tooltip/info-tooltip.vue'

const props = withDefaults(defineProps<IFormItemProps>(), {
    noEdit: false,
    noEditText: '创建后无法修改',
})
const emits = defineEmits<IFormItemEmits>()

const infoTooltipProps = computed(() => ({
    ...props,
    ...props.tooltipProps,
}))

function handleClick() {
    emits('click', props.code, props.label)
}
</script>

<style lang="scss" module>
.form-item {
    .label-extra {
        display: none;
    }

    :global {
        .el-form-item__label {
            display: flex;
        }
    }

    &:global(.el-form-item--label-top) {
        label {
            width: auto;
        }

        .label-extra {
            display: flex;
        }

        .label-wrapper {
            display: flex;
            flex-grow: 1;
            justify-content: space-between;
        }
    }
}

.label-container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.no-edit-icon {
    color: var(--el-color-warning);
}

.label {
    margin-right: 4px;
    margin-left: v-bind('`${noEdit ? 4 : 0}px`');
}
</style>
