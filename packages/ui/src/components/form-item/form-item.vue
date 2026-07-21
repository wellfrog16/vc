<template>
    <component :is="component" v-if="component">
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
    </component>
</template>

<script setup lang="ts">
import type { IFormItemEmits, IFormItemProps } from './form-item'
import { ElFormItem } from 'element-plus'
import VcInfoTooltip from '../info-tooltip/info-tooltip.vue'

const props = withDefaults(defineProps<IFormItemProps>(), {})
const emits = defineEmits<IFormItemEmits>()
const component = shallowRef()

// 直接用 el-form-item，由于组件库打包后再使用的 el-form 和 el-form-item 并非同一个源
// 导致打包后组件库中 el-form-item 无法正常使用 el-from 传递下来的数据
// 所以这里把渲染放到 onBeforeMount 阶段，确保 el-form-item 和 el-form 是同一个源
onBeforeMount(() => {
    component.value = ElFormItem
})

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
