<template>
    <el-splitter-panel :class="$style.panel">
        <VcScrollbar flex :view-class="$style.container"><slot /></VcScrollbar>
    </el-splitter-panel>
</template>

<script setup lang="ts">
import type { ISplitterPanelProps } from './splitter-panel'
import VcScrollbar from '../scrollbar/scrollbar.vue'

withDefaults(defineProps<ISplitterPanelProps>(), {
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
