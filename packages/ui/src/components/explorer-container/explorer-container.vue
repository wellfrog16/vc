<template>
    <div v-loading="loading" :class="$style['explorer-container']">
        <div :class="$style.header">
            <div :class="$style['header-container']"><VcIconifyIcon v-if="icon" :name="icon" :class="$style.icon" /><slot name="title">{{ title }}</slot></div>
            <div v-if="$slots.action" :class="$style.actions"><slot name="action" /></div>
        </div>
        <VcScrollbar always>
            <slot />
        </VcScrollbar>
    </div>
</template>

<script setup lang="ts">
import type { IExplorerContainerProps } from './explorer-container'
import VcIconifyIcon from '../iconify-icon/iconify-icon.vue'
import VcScrollbar from '../scrollbar/scrollbar.vue'

withDefaults(defineProps<IExplorerContainerProps>(), {
    icon: 'carbon:information-square',
    loading: false,
})
</script>

<style lang="scss" module>
.explorer-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--el-border-color-lighter);
    min-height: 40px;
    padding-bottom: 7px;
    box-sizing: border-box;
    margin-bottom: 8px;
    color: var(--el-text-color-regular);
    flex-wrap: wrap;
    row-gap: 8px;
}

.header-container {
    font-size: 1.2em;
}

.icon {
    margin-right: 4px;
}
</style>
