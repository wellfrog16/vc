<template>
    <div :class="$style['explorer-footer']">
        <div><slot /></div>
        <ElPagination v-if="isNumber(props.total)" background :layout="layout" :total="total" v-bind="$attrs" />
    </div>
</template>

<script setup lang="ts">
import type { IExplorerFooterProps } from './explorer-footer'
import { isNumber } from 'lodash-es'

const props = withDefaults(defineProps<IExplorerFooterProps>(), {
    padding: 8,
    layout: 'total, prev, pager, next',
})
</script>

<style lang="scss" module>
.explorer-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: v-bind('`${padding}px`');
}
</style>
