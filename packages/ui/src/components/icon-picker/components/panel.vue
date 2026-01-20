<template>
    <div :class="$style.panel">
        <div :class="$style.wrapper">
            <ElInput v-model="keyword" placeholder="搜索图标..." :class="$style['search-input']" clearable>
                <template v-if="showCollections" #prepend>
                    <ElButton :icon="icon" type="primary" :class="$style['collections-button']" @click="toggleCollections" />
                </template>
                <template v-if="categories.length" #append>
                    <VcSelect v-model="currentCategory" placeholder="分类" :options="categories" width="120px" :teleported="false" clearable @change="p = 1" />
                </template>
            </ElInput>
            <ul :class="$style.container" @click="handleChoice">
                <li v-for="item in pageIcons" :key="item" :data-icon-name="item">
                    <VcIconifyIcon :name="`${collection}:${item}`" />
                </li>
            </ul>
            <ElDivider :class="$style.divider" />
            <ElPagination v-model:current-page="p" size="small" layout="prev, pager, next" :total="total" :page-size="ps" :class="$style.pagination" />
        </div>
        <div v-if="showCollections && collectionsVisible" ref="collectionsWrapperRef" :class="$style['collections-wrapper']">
            <Collections :collection="collection" :collections="collections" @choiced="handleCollectionChoiced" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IIconPickerProps } from '../icon-picker'
import { promiseTimeout } from '@vueuse/core'
import VcIconifyIcon from '@/components/iconify-icon/iconify-icon.vue'
import VcSelect from '@/components/select/select.vue'
import { useIcon } from '../icon-picker'
import Collections from './collections.vue'

const props = defineProps<IIconPickerProps>()
const emits = defineEmits<{
    (event: 'choiced', value: string): void
}>()

const $style = useCssModule()
const { fetchData, pageIcons, categories, currentCategory, total, ps, p, keyword, collection } = useIcon()
const collectionsWrapperRef = useTemplateRef('collectionsWrapperRef')
const collectionsVisible = ref(false)
const icon = h(VcIconifyIcon, { name: 'mage:caret-left', size: 40 })

// 只要不是现在只显示一种合集，就显示合集列表
const showCollections = computed(() => !(Array.isArray(props.collections) && props.collections.length === 1))

async function toggleCollections() {
    if (!collectionsVisible.value || collectionsWrapperRef.value?.classList.contains($style.hidden)) {
        collectionsVisible.value = true
        await promiseTimeout(0)
        const element = collectionsWrapperRef.value!
        element.classList.add($style.visible)
        element.classList.remove($style.hidden)
        setTimeout(() => { element.classList.add($style.shadow) }, 200)
    }
    else {
        const element = collectionsWrapperRef.value!
        element.classList.remove($style.shadow)
        element.classList.remove($style.visible)
        setTimeout(() => { element.classList.add($style.hidden) }, 300)
    }
}

function handleChoice(e: MouseEvent) {
    let target = e.target as HTMLElement
    while (target.tagName !== 'LI') {
        target = target.parentElement as HTMLElement
    }
    const name = target.getAttribute('data-icon-name')
    if (name) {
        emits('choiced', `${collection.value}:${name}`)
    }
}

function handleCollectionChoiced(name: string) {
    collection.value = name
}

const collectionWatch = watch(() => props.modelValue, () => {
    if (props.collections?.length === 1) {
        collection.value = props.collections[0]
        return
    }
    if (props.collection) {
        collection.value = props.collection
        return
    }
    if (props.modelValue && props.modelValue.includes(':')) {
        collection.value = props.modelValue.split(':')[0]
    }
}, { immediate: true })

onMounted(() => fetchData(collection.value))
onUnmounted(() => collectionWatch.stop())
</script>

<style lang="scss" module>
.panel {
    position: relative;
}

.wrapper {
    background-color: var(--el-color-white);
    position: relative;
    z-index: 5;
}

.search-input {
    :global {
        .el-input-group__prepend {
            padding: 0 16px;
        }
    }
}

button.collections-button {
    padding: 0;
    width: 50px;
    display: inline-flex !important;
    justify-content: center;
    align-items: center;

    &:hover {
        :global {
            .el-icon {
                color: var(--el-color-primary);
            }
        }
    }

    :global {
        .el-icon {
            font-size: 24px;
            transition: color 0.3s;
        }
    }
}

.collections-wrapper {
    position: absolute;
    top: -12px;
    left: 0;
    bottom: -12px;
    width: 200px;
    background-color: var(--el-color-white);
    padding: 12px;
    z-index: 3;
    transition: left 0.3s;
    border-radius: 4px;

    &.shadow {
        box-shadow: var(--el-box-shadow-light);
    }

    &.visible {
        left: -212px;
    }

    &.hidden {
        opacity: 0;
    }
}

.container {
    list-style: none;
    padding: 8px 0 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 0;
    height: 174px;
    font-size: 24px;

    li {
        padding: 4px;
        cursor: pointer;
        border-radius: 4px;
        line-height: 0;

        &:hover {
            background-color: var(--el-color-primary-light-7);
        }
    }
}

.divider {
    margin: 4px 0;
}

.pagination {
    justify-content: center;
}
</style>
