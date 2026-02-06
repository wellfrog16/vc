<template>
    <el-splitter-panel :class="$style.panel" :resizable="resizable">
        <div :class="$style.container"><slot /></div>
    </el-splitter-panel>
</template>

<script setup lang="ts">
import type { IExplorerPanelProps } from './explorer-panel'

withDefaults(defineProps<IExplorerPanelProps>(), {
    resizable: false,
    padding: 8,
})
</script>

<style lang="scss" module>
.panel {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    // height: 100px;
}

.container {
    display: flex;
    flex-direction: column;
    padding: v-bind('`${padding}px`');
    flex-grow: 1;
}
</style>
