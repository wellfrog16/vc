<template>
    <div :class="$style.main">
        <ElButton :size="size" :disabled="!havePrev" @click="() => handlePageChange(-1)">{{ prevText }}</ElButton>
        <ElButton :size="size" :disabled="!haveNext" @click="() => handlePageChange(1)">{{ nextText }}</ElButton>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ElButton } from 'element-plus'
import type { PropType } from 'vue'

const props = defineProps({
    size: { type: String as PropType<import('element-plus/es/components/button').ButtonProps['size']>, default: 'small' },
    prevText: { type: String, default: '上一页' },
    nextText: { type: String, default: '下一页' },
    currentPage: { type: Number, default: 1 },
    haveNext: { type: Boolean, default: false },
})

const emits = defineEmits(['currentChange', 'update:currentPage', 'prevClick', 'nextClick'])
const havePrev = computed(() => props.currentPage > 1)
const handlePageChange = (p: number) => {
    let currentPage = props.currentPage + p
    currentPage = currentPage > 0 ? currentPage : 1
    emits('update:currentPage', currentPage)
    emits('currentChange', currentPage)
    p < 0 && emits('prevClick', currentPage)
    p > 0 && emits('nextClick', currentPage)
}
</script>

<style lang="scss" module>
.main {
    padding: 2px 5px;

    :global {
        .el-button {
            margin: 0 5px;
        }

        .el-button + .el-button {
            margin-left: 0;
        }
    }
}
</style>
