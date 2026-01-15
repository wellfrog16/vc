<template>
    <ElIcon :size="size" :color="color" :class="$style.icon">
        <component :is="Icons[props.name]" />
    </ElIcon>
</template>

<script lang="ts" setup>
import type { IElIconProps } from './el-icon'

import * as Icons from '@element-plus/icons-vue'
import { ElIcon } from 'element-plus'

const props = withDefaults(defineProps<IElIconProps>(), { color: '', size: '' })
</script>

<style lang="scss" module>
.icon {
    vertical-align: middle;

    &:global(.el-icon) {
        font-size: 1em;
        vertical-align: -0.17em;
    }
}
</style>
