<template>
    <ElIcon :size="size" :color="color" :class="$style.icon">
        <component :is="name" />
    </ElIcon>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElIcon } from 'element-plus'
import * as Icons from '@element-plus/icons-vue'

export default defineComponent({
    components: { ...Icons, ElIcon },
    props: {
        name: { type: String, required: true },
        color: { type: String, default: '' },
        size: { type: [Number, String], default: '' },
    },
})
</script>

<style lang="scss" module>
.icon {
    vertical-align: -0.15em;

    &:global(.el-icon) {
        font-size: 1em;
    }
}
</style>
