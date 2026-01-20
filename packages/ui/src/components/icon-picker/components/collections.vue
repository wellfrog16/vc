<template>
    <div :class="$style.wrapper">
        <VcScrollbar ref="scrollbarRef" flex @end-reached="loadMore">
            <div :class="$style['search-wrapper']">
                <ElInput v-model="keyword" placeholder="搜索合集..." :class="$style['search-input']" clearable @keyup="handleSearch" @clear="handleSearch" />
            </div>
            <div :class="$style.container" @click="handleChoice">
                <div v-for="item in listCollections" :key="item" :class="[$style.collection, { [$style.active]: item === collection }]" :data-collection-name="item">
                    <h5><span>[{{ collectionsData![item].total }}]</span>{{ item }}</h5>
                    <div :class="$style.icons">
                        <VcIconifyIcon v-for="icon in collectionsData![item].samples" :key="`${item}:${icon}`" :name="`${item}:${icon}`" />
                    </div>
                </div>
            </div>
        </VcScrollbar>
    </div>
</template>

<script setup lang="ts">
import { debounce } from 'lodash-es'
import VcIconifyIcon from '@/components/iconify-icon/iconify-icon.vue'
import VcScrollbar from '@/components/scrollbar/scrollbar.vue'
import { useCollection } from '../icon-picker'

const props = defineProps<{
    collection?: string
    collections?: string[] // 要展示的合集，不传则展示全部
}>()

const emits = defineEmits<{
    (e: 'choiced', name: string): void
}>()

const { fetchData, listCollections, loadMore, collectionsData, collections, search } = useCollection()
const scrollbarRef = useTemplateRef('scrollbarRef')
const keyword = ref('')

const handleSearch = debounce(() => {
    search(keyword.value)
    scrollbarRef.value?.setScrollTop(0)
}, 500)

function handleChoice(e: MouseEvent) {
    let target = e.target as HTMLElement
    while (target.getAttribute('data-collection-name') === null) {
        target = target.parentElement as HTMLElement
    }
    const name = target.getAttribute('data-collection-name')
    if (name) {
        emits('choiced', name)
    }
}

onMounted(async () => {
    await fetchData()
    if (Array.isArray(props.collections) && props.collections.length > 0) {
        collections.value = props.collections
    }
})
</script>

<style lang="scss" module>
.wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.search-wrapper {
    position: sticky;
    top: 0;
    padding-bottom: 4px;
    background-color: var(--el-color-white);
}

.container {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
}

.collection {
    border: 1px solid var(--el-input-border-color);
    border-radius: 4px;
    box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
    padding: 4px;
    cursor: pointer;

    &.active {
        background-color: var(--el-color-primary-light-9);
    }

    &:hover {
        background-color: var(--el-color-primary-light-7);
    }

    h5 {
        font-size: 14px;
        // 长文本溢出省略号处理
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
        color: var(--el-text-color-regular);

        span {
            color: var(--el-text-color-secondary);
            margin-right: 4px;
        }
    }
}

.icons {
    font-size: 24px;
    display: flex;
    column-gap: 4px;
}
</style>
