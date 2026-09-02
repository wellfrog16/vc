<template>
    <div :class="[$style['explorer-tools'], { [$style['bottom-border']]: bottomBorder }]" class="vc-explorer-tools">
        <div :class="$style.buttons">
            <VcButton v-if="create" type="primary" @click="emits('create')">{{ createText }}</VcButton>
            <slot />
        </div>
        <div v-if="Array.isArray(tools) && tools.length > 0" :class="$style.tools">
            <template v-for="tool in tools" :key="tool">
                <slot v-if="tool === 'custom'" name="custom" />
                <VcInput
                    v-if="tool === 'search'"
                    v-model="keyword"
                    :placeholder="searchPlaceholder"
                    clearable
                    :prefix-icon="Search"
                    width="180px"
                    @keydown.enter="handleSearch"
                    @clear="handleSearch"
                />
                <ElRadioGroup v-if="tool === 'layout'" v-model="myLayout" :class="$style.layout" @change="emits('layout', myLayout)">
                    <ElRadioButton value="card" title="卡片视图"><VcIconifyIcon name="lucide:layout-grid" /></ElRadioButton>
                    <ElRadioButton value="list" title="列表视图"><VcIconifyIcon name="lucide:table-of-contents" /></ElRadioButton>
                </ElRadioGroup>
                <VcButton v-if="tool === 'refresh'" class="vc-icon-button" title="刷新" :throttle="throttle" circle :icon="{ name: 'Refresh', type: 'el' }" @click="emits('refresh')" />
                <VcButton v-if="tool === 'fullscreen'" class="vc-icon-button" title="全屏" :type="isFullScreen ? 'primary' : 'default'" circle :icon="{ name: 'FullScreen', type: 'el' }" @click="toggleFullScreen" />
                <ColumnSetter
                    v-if="tool === 'setter'"
                    v-model:data="columnConfig"
                    :tools-key="toolsKey"
                    :size="columnSetterSize"
                    :column-to-storage="columnToStorage"
                    :reset-visible="columnResetVisible"
                    :formatter-name-options="columnFormatterNameOptions"
                    @config-confirm="val => emits('configConfirm', val)"
                    @reset="emits('columnReset')"
                >
                    <VcButton class="vc-icon-button" :class="$style.test" title="设置" circle :icon="{ name: 'Setting', type: 'el' }" :throttle="throttle" />
                </ColumnSetter>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IExplorerToolsEmits, IExplorerToolsProps } from './explorer-tools'
import { Search } from '@element-plus/icons-vue'
import { useZIndex } from 'element-plus'
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
    columnFormatterNameOptions: () => [],
})
const emits = defineEmits<IExplorerToolsEmits>()

const { nextZIndex } = useZIndex()

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
        if (isFullScreen.value) {
            target.classList.add($style.fullscreen)
            target.style.zIndex = nextZIndex().toString()
        }
        else {
            target.classList.remove($style.fullscreen)
            target.style.zIndex = ''
        }
        emits('fullscreen', isFullScreen.value)
    }
}
</script>

<style lang="scss" module>
.explorer-tools {
    display: flex;
    row-gap: 8px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0 8px 0;

    &.bottom-border {
        margin-bottom: 8px;
        border-bottom: 1px solid var(--el-border-color-lighter);
    }
}

.buttons {
    display: flex;
    column-gap: 8px;
    align-items: center;

    button {
        margin-left: 0 !important;
    }
}

.tools {
    display: flex;
    column-gap: 8px;
    align-items: center;

    :global {
        button.vc-icon-button {
            margin-left: 0 !important;
            padding: 4px;
            font-size: 18px;
        }
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
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    background-color: var(--el-bg-color) !important;
    width: 100% !important;
    height: 100% !important;
}
</style>
