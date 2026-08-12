<template>
    <div :class="$style.wrapper">
        <div :class="$style.container">
            <VcScrollbar>
                <div v-for="i in 20" :key="i">{{ i }}</div>
            </VcScrollbar>
        </div>
        <div :class="$style.container">
            <VcScrollbar
                :scroll-load="true"
                :scroll-load-disabled="noMore"
                :loading="loading"
                scroll-load-root-margin="20px"
                @load-more="handleLoadMore"
            >
                <div v-for="item in list" :key="item" :class="$style.item">{{ item }}</div>
            </VcScrollbar>
        </div>
    </div>
</template>

<script setup lang="ts">
const PAGE_SIZE = 20
const MAX_COUNT = 100

const list = ref<string[]>(generateData(0, PAGE_SIZE))
const loading = ref(false)
const noMore = computed(() => list.value.length >= MAX_COUNT)

function generateData(start: number, count: number): string[] {
    return Array.from({ length: count }).map((_, i) => `项目 ${start + i + 1}`)
}

function handleLoadMore() {
    if (loading.value || noMore.value) { return }

    loading.value = true
    setTimeout(() => {
        list.value.push(...generateData(list.value.length, PAGE_SIZE))
        loading.value = false
    }, 5000)
}
</script>

<style lang="scss" module>
.wrapper {
    display: flex;
    height: 400px;
    flex-direction: column;
    gap: 16px;
}

.container {
    display: flex;
    height: 10px;
    flex-direction: column;
    flex-grow: 1;
    border: 1px solid var(--el-border-color-light);
}

.item {
    padding: 6px 12px;
    border-bottom: 1px solid var(--el-border-color-light);
}
</style>
