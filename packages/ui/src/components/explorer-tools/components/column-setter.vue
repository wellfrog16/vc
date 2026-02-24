<template>
    <ElPopover placement="bottom-end" trigger="click" :width="popoverWidth" :teleported="false" :show-arrow="false" @hide="onHide" @before-enter="handleBefore">
        <template v-if="isInit" #default>
            <div :class="$style.header">
                <ElText size="large">列设置</ElText>
                <div :class="$style['mode-wrapper']">
                    <VcButton v-if="isFullMode && resetVisible" :class="$style.reset" :icon="{ name: 'RefreshLeft' }" @click="emits('reset')">重置</VcButton>
                    <ElSegmented v-model="mode" :options="modeOptions" :class="$style.segmented" />
                </div>
            </div>
            <ElDivider :class="$style.divider" />
            <VcExplorerColumnTable ref="columnTableRef" v-model:data="myData" :size="size" :mode="mode" :height="320" />
        </template>
        <template #reference>
            <slot />
        </template>
    </ElPopover>
</template>

<script setup lang="ts">
import type { IColumnSetterEmits, IColumnSetterProps } from '../explorer-tools'
import { storage } from '@wfrog/vc-utils'
import VcButton from '@/components/button/button.vue'
import VcExplorerColumnTable from '@/components/explorer-column-table/explorer-column-table.vue'
import { injectExplorerState } from '../../explorer/explorer'

const props = withDefaults(defineProps<IColumnSetterProps>(), {
    data: () => [],
})

const emits = defineEmits<IColumnSetterEmits>()

const { key } = injectExplorerState()
const myData = useVModel(props, 'data', emits)
const columnTableRef = useTemplateRef('columnTableRef')
const $style = useCssModule()

const columnStorageKey = props.toolsKey ? `${key}-${props.toolsKey}-column-config` : `${key}-column-config`

const modeOptions = [
    { label: '简单设置', value: 'easy' },
    { label: '完整设置', value: 'full' },
]

const mode = ref<'easy' | 'full'>('easy')
const isFullMode = computed(() => mode.value === 'full')
const popoverWidth = computed(() => isFullMode.value ? '750px' : '270px')
const isInit = ref(false)

function onHide() {
    emits('configConfirm', myData.value)
    if (!props.columnToStorage) { return }
    storage.set(columnStorageKey, myData.value)
}

function loadConfig() {
    if (props.columnToStorage) {
        const columnConfig = storage.get(columnStorageKey)
        if (Array.isArray(columnConfig) && columnConfig.length) {
            myData.value = columnConfig
        }
    }
    else {
        storage.remove(columnStorageKey)
    }
}

async function handleBefore() {
    isInit.value = true
    loadConfig()
    await nextTick()
    columnTableRef.value?.init()
}

onBeforeMount(() => loadConfig())
</script>

<style lang="scss" module>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.mode-wrapper {
    display: flex;
    align-items: center;
    column-gap: 8px;
}

.segmented {
    :global(.el-segmented__item-label) {
        line-height: 1;
    }
}

.reset {
    height: 28px;
}

.divider {
    margin: 8px 0;
}
</style>
