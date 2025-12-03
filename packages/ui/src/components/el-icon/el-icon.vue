<template>
    <ElIcon :size="size" :color="color" :class="$style.icon">
        <component :is="Icons[name]" />
    </ElIcon>
</template>

<script lang="ts" setup>
import type { IPropType } from './el-icon'
import * as Icons from '@element-plus/icons-vue'
import { ElIcon } from 'element-plus'

withDefaults(defineProps<IPropType>(), { color: '', size: '' })
</script>

<style lang="scss" module>
.icon {
    vertical-align: middle;

    &:global(.el-icon) {
        font-size: 1em;
    }
}
</style>
