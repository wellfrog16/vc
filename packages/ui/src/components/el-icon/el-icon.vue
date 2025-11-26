<template>
    <ElIcon :size="size" :color="color" :class="$style.icon">
        <component :is="Icons[name]" />
    </ElIcon>
</template>

<script lang="ts" setup>
import * as Icons from '@element-plus/icons-vue'
import { ElIcon } from 'element-plus'

interface IPropType {
    name: keyof typeof Icons
    color?: string
    size?: string | number
}

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
