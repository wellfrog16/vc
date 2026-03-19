<template>
    <div :class="$style['transfer-panel']">
        <TransferChildPanel v-model="transferPanelValue" :width="panelHalfWidth" :title="title" type="source" :data="data" @change="(...params) => emits('change', ...params)" />
        <div :class="$style.divider" />
        <TransferChildPanel v-model="transferPanelValue" :width="panelHalfWidth" type="choiced" :data="data" @change="(...params) => emits('change', ...params)" />
    </div>
</template>

<script setup lang="ts">
import type { ITransferPanelEmits, ITransferPanelProps } from './transfer-panel'
import TransferChildPanel from './components/transfer-child-panel.vue'

const props = withDefaults(defineProps<ITransferPanelProps>(), {
    height: '300px',
    halfWidth: '200px',
    data: () => [],
})
const emits = defineEmits<ITransferPanelEmits>()

const transferPanelValue = useVModel(props, 'modelValue', emits)

const transferPanelHeight = computed(() => {
    if (props.height && Number.isNaN(+props.height)) { return props.height }
    return `${props.height}px`
})
const panelHalfWidth = computed<string>(() => {
    if (props.halfWidth && Number.isNaN(+props.halfWidth)) { return props.halfWidth as string }
    return `${props.halfWidth}px`
})
</script>

<style lang="scss" module>
.transfer-panel {
    display: flex;
    height: v-bind(transferPanelHeight);
    border-radius: var(--el-border-radius-base);
    border: 1px solid var(--el-border-color-light);
    width: fit-content;
}

.divider {
    width: 1px;
    height: 100%;
    background-color: var(--el-border-color-light);
}
</style>
