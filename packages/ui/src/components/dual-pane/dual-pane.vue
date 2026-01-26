<template>
    <el-splitter :layout="layout" :lazy="lazy">
        <el-splitter-panel v-bind="props1" :class="$style.panel">
            <VcScrollbar flex :view-class="$style.container"><slot name="panel1" /></VcScrollbar>
        </el-splitter-panel>
        <el-splitter-panel v-bind="props2" :class="$style.panel">
            <VcScrollbar flex :view-class="$style.container"><slot name="panel2" /></VcScrollbar>
        </el-splitter-panel>
    </el-splitter>
</template>

<script setup lang="ts">
import type { IDualPaneProps } from './dual-pane'
import VcScrollbar from '../scrollbar/scrollbar.vue'

withDefaults(defineProps<IDualPaneProps>(), {
    layout: 'horizontal',
    lazy: true,
    padding: 8,
})
</script>

<style lang="scss" module>
.panel {
    display: flex;
    flex-direction: column;
}

.container {
    padding: v-bind('`${padding}px`');
}
</style>
