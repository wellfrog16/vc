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
            <ElPopover :visible="settingVisible" placement="bottom-end" trigger="click">
                <slot name="setting" />
                <template #reference>
                    <VcButton v-if="tools.includes('setting')" title="设置" circle :icon="{ name: 'Setting', type: 'el' }" :throttle="throttle" @click="handleSetting" />
                </template>
            </ElPopover>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IExplorerToolsEmits, IExplorerToolsProps } from './explorer-tools'
import { Search } from '@element-plus/icons-vue'
import usePersistentModel from '@/use/usePersistentModel'
import VcButton from '../button/button.vue'
import { injectState } from '../explorer/explorer'
import VcIconifyIcon from '../iconify-icon/iconify-icon.vue'
import VcInput from '../input/input.vue'

const props = withDefaults(defineProps<IExplorerToolsProps>(), {
    tools: () => ['search', 'refresh', 'fullscreen', 'setting'],
    searchPlaceholder: '请输入搜索内容',
    layout: 'card',
    createText: '新增',
    throttle: 800,
})
const emits = defineEmits<IExplorerToolsEmits>()

const { fullscreenTarget, key } = injectState()
const $style = useCssModule()
const [settingVisible, toggleSettingVisible] = useToggle()

const myLayout = usePersistentModel('layout', `${key}-layout`, props.layout)

const keyword = ref('')

const handleSearch = useThrottleFn(() => {
    emits('search', keyword.value)
}, props.throttle)

function handleSetting() {
    toggleSettingVisible()
    emits('setting', settingVisible.value)
}

const isFullScreen = ref(false)
function toggleFullScreen() {
    if (!props.group) { return }
    const target = fullscreenTarget.value[props.group]
    if (target) {
        isFullScreen.value = !isFullScreen.value
        isFullScreen.value ? target.classList.add($style.fullscreen) : target.classList.remove($style.fullscreen)
        emits('fullscreen', isFullScreen.value)
    }
}

onMounted(() => {
    // const key = useStableKey()
    // console.log('ExplorerTools key:', key)
})
</script>

<style lang="scss" module>
.explorer-tools {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
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

    button {
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
