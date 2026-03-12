<template>
    <div :class="$style['explorer-footer']">
        <div v-if="align === 'right'"><slot /></div>
        <ElPagination v-if="isNumber(props.total)" background :layout="layout" :total="total" v-bind="$attrs" />
        <div v-if="align === 'left'"><slot /></div>
    </div>
</template>

<script setup lang="ts">
import type { IExplorerFooterProps } from './explorer-footer'
import { isNumber } from 'lodash-es'

const props = withDefaults(defineProps<IExplorerFooterProps>(), {
    paddingTop: 8,
    layout: 'total, prev, pager, next',
    align: 'right',
})

const justifyContent = computed(() => {
    if (props.align === 'center') {
        return 'center'
    }
    return 'space-between'
})
</script>

<style lang="scss" module>
.explorer-footer {
    display: flex;
    justify-content: v-bind(justifyContent);
    align-items: center;
    padding-top: v-bind('`${paddingTop}px`');
}
</style>
