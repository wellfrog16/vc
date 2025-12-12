<template>
    <div :class="$style.main">
        <ElButton :size="size" :disabled="!havePrev" @click="() => handlePageChange(-1)">{{ prevText }}</ElButton>
        <ElButton :size="size" :disabled="!haveNext" @click="() => handlePageChange(1)">{{ nextText }}</ElButton>
    </div>
</template>

<script lang="ts" setup>
import type { IEasyPaginationProps } from './easy-pagination'

const props = withDefaults(defineProps<IEasyPaginationProps>(), {
    size: 'small',
    prevText: '上一页',
    nextText: '下一页',
    currentPage: 1,
    haveNext: false,
})

const emits = defineEmits<{
    (e: 'currentChange', p: number): void
    (e: 'update:currentPage', p: number): void
    (e: 'prevClick', p: number): void
    (e: 'nextClick', p: number): void
}>()

const havePrev = computed(() => props.currentPage > 1)
function handlePageChange(p: number) {
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
