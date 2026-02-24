<template>
    <div :class="$style['explorer-tools']">
        <div :class="$style.buttons">
            <VcButton v-if="create" type="primary" @click="emits('create')">{{ createText }}</VcButton>
            <slot />
        </div>
        <div v-if="Array.isArray(tools) && tools.length > 0" :class="$style.tools">
            <VcInput
                v-if="tools.includes('search')"
                v-model="keyword"
                :placeholder="searchPlaceholder"
                clearable
                :prefix-icon="Search"
                width="180px"
                @keydown.enter="handleSearch"
                @clear="handleSearch"
            />
            <ElRadioGroup v-if="tools.includes('layout')" v-model="myLayout" :class="$style.layout" @change="emits('layout', myLayout)">
                <ElRadioButton value="card" title="卡片视图"><VcIconifyIcon name="lucide:layout-grid" /></ElRadioButton>
                <ElRadioButton value="list" title="列表视图"><VcIconifyIcon name="lucide:table-of-contents" /></ElRadioButton>
            </ElRadioGroup>
            <VcButton v-if="tools.includes('refresh')" title="刷新" :throttle="throttle" circle :icon="{ name: 'Refresh', type: 'el' }" @click="emits('refresh')" />
            <VcButton v-if="tools.includes('fullscreen')" title="全屏" :type="isFullScreen ? 'primary' : 'default'" circle :icon="{ name: 'FullScreen', type: 'el' }" @click="toggleFullScreen" />
            <ColumnSetter
                v-if="tools.includes('setter')"
                v-model:data="columnConfig"
                :tools-key="toolsKey"
                :size="columnSetterSize"
                :column-to-storage="columnToStorage"
                :reset-visible="columnResetVisible"
                @config-confirm="val => emits('configConfirm', val)"
                @reset="emits('columnReset')"
            >
                <VcButton title="设置" circle :icon="{ name: 'Setting', type: 'el' }" :throttle="throttle" />
            </ColumnSetter>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IExplorerToolsEmits, IExplorerToolsProps } from './explorer-tools'
import { Search } from '@element-plus/icons-vue'
import usePersistentModel from '@/use/usePersistentModel'
import VcButton from '../button/button.vue'
import { injectExplorerPanelState } from '../explorer-panel/explorer-panel'
import { injectExplorerState } from '../explorer/explorer'
import VcIconifyIcon from '../iconify-icon/iconify-icon.vue'
import VcInput from '../input/input.vue'
import ColumnSetter from './components/column-setter.vue'

const props = withDefaults(defineProps<IExplorerToolsProps>(), {
    tools: () => ['refresh', 'fullscreen', 'setter'],
    searchPlaceholder: '请输入搜索内容',
    layout: 'list',
    createText: '新增',
    throttle: 800,
    fullscreenTarget: 'page',
    columnSetterSize: 'small',
    columnResetVisible: true,
})
const emits = defineEmits<IExplorerToolsEmits>()

const { key, fullscreenTarget: pageTarget } = injectExplorerState()
const { fullscreenTarget: panelTarget, columnConfig } = injectExplorerPanelState()
const $style = useCssModule()

const layoutStorageKey = props.toolsKey ? `${key}-${props.toolsKey}-layout` : `${key}-layout`
const myLayout = usePersistentModel('layout', layoutStorageKey, props.layout)

const keyword = ref('')

const handleSearch = useThrottleFn(() => {
    emits('search', keyword.value)
}, props.throttle)

const isFullScreen = ref(false)
function toggleFullScreen() {
    const target = props.fullscreenTarget === 'page' ? pageTarget.value : panelTarget.value
    if (target) {
        isFullScreen.value = !isFullScreen.value
        isFullScreen.value ? target.classList.add($style.fullscreen) : target.classList.remove($style.fullscreen)
        emits('fullscreen', isFullScreen.value)
    }
}
</script>

<style lang="scss" module>
.explorer-tools {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    flex-wrap: wrap;
    row-gap: 8px;
}

.buttons {
    display: flex;
    align-items: center;
    column-gap: 8px;

    button {
        margin-left: 0 !important;
    }
}

.tools {
    display: flex;
    align-items: center;
    column-gap: 12px;

    > button {
        padding: 4px;
        font-size: 18px;
        margin-left: 0 !important;
    }
}

.layout {
    :global(.el-radio-button__inner) {
        padding: 6px 8px;
        font-size: 18px;
    }
}

.fullscreen {
    position: fixed !important;
    background-color: var(--el-bg-color) !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100% !important;
    height: 100% !important;
    z-index: 9999 !important;
}
</style>
