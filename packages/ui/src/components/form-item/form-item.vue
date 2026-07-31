<template>
    <ElFormItem>
        <template #label>
            <span :class="$style['label-container']">
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

const props = withDefaults(defineProps<IFormItemProps>(), {})
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
.label-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.label {
    margin-right: 4px;
}
</style>
