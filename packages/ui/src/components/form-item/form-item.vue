<template>
    <ElFormItem :class="$style['form-item']">
        <template #label>
            <span :class="$style['label-container']">
                <VcInfoTooltip v-if="noEdit" content="创建后无法修改" offset-y="0px" icon="carbon:locked" :icon-class="$style['no-edit-icon']" />
                <span :class="$style.label">{{ label }}</span>
                <VcInfoTooltip v-bind="infoTooltipProps" offset-y="0px" @click="handleClick" />
            </span>
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
    :global(.el-form-item__label) {
        display: flex;
    }
}

.label-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.no-edit-icon {
    color: var(--el-color-warning);
}

.label {
    margin-right: 4px;
    margin-left: v-bind('`${noEdit ? 4 : 0}px`');
}
</style>
