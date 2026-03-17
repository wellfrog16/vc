<template>
    <ElDrawer
        v-if="visible || !lazy"
        v-model="drawerVisible"
        v-bind="$attrs"
        :close-on-click-modal="false"
        :show-close="false"
        :class="$style.main"
        append-to-body
        :size="mySize"
        @closed="handleClosed"
    >
        <template #header="{ close, titleId, titleClass }">
            <div :class="$style.header">
                <span :id="titleId" :class="[titleClass, $style.title]">
                    <slot name="title" :close="close">{{ title }}</slot>
                </span>
                <span :class="$style.buttons">
                    <slot name="header-action" />
                    <ElButton v-show="showFullscreen" :class="$style['icon-button']" :icon="Icon" plain @click="() => toggleFullscreen()" />
                    <ElButton :class="$style['icon-button']" :icon="Close" plain @click="close" />
                </span>
            </div>
        </template>
        <ElScrollbar class="drawer-scrollbar" always>
            <div :class="$style['body-container']"><slot /></div>
        </ElScrollbar>
        <div v-if="showDefaultFooter || $slots.footer" class="drawer-footer"><slot name="footer"><VcButton @click="drawerVisible = false">关闭</VcButton></slot></div>
    </ElDrawer>
</template>

<script lang="ts" setup>
import type { IDrawerEmits, IDrawerProps } from './drawer'
import { Close, CopyDocument, FullScreen } from '@element-plus/icons-vue'
import VcButton from '../button/button.vue'

const props = withDefaults(defineProps<IDrawerProps>(), {
    title: '对话框',
    lazy: true,
    showDefaultFooter: false,
    boxPadding: true,
    fullscreen: false,
    showFullscreen: true,
    size: '500px',
})

const emits = defineEmits<IDrawerEmits>()

const drawerVisible = useVModel(props, 'modelValue', emits)
const visible = ref(false) // 用于销毁对话框以及非开启状态时不渲染
const isFullscreen = ref(false)
const toggleFullscreen = useToggle(isFullscreen)
const Icon = computed(() => isFullscreen.value ? CopyDocument : FullScreen)

const mySize = computed(() => isFullscreen.value ? '100%' : props.size)

watch(drawerVisible, val => {
    if (val) {
        isFullscreen.value = props.fullscreen
        visible.value = true
    }
})

function handleClosed() {
    visible.value = false
    emits('closed')
}
</script>

<style lang="scss" module>
.main {
    height: 100%;

    :global {
        .el-drawer__header {
            box-sizing: border-box;
            flex: 0 0 auto;
            padding: 8px 16px;
            margin-bottom: 0;
            border-bottom: 1px solid var(--el-border-color-light);
            font-size: var(--el-font-size-large);
        }

        .el-drawer__body {
            display: flex;
            flex-direction: column;
            padding: 0;
            overflow: hidden;
        }

        .drawer-footer {
            display: flex;
            flex: 0 0 auto;
            padding: 8px 16px;
            border-top: 1px solid var(--el-border-color-light);

            .el-button {
                flex-grow: 1;
            }
        }
    }

    :global(> .el-drawer__body > .el-scrollbar) {
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: calc(100% - 8px);
            height: 100%;
            background: var(--el-bg-color);
            height: 16px;
            z-index: 3;
            display: v-bind('boxPadding ? "block" : "none"');
            // background-image: radial-gradient(transparent 1px, var(--el-bg-color) 1px);
            // background-size: 4px 4px;
            // backdrop-filter: saturate(50%) blur(4px);
        }

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: calc(100% - 8px);
            height: 100%;
            background: var(--el-bg-color);
            height: 16px;
            z-index: 3;
            display: v-bind('boxPadding ? "block" : "none"');
        }
    }
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h4 {
        padding: 0;
        margin: 0 !important;
    }
}
.buttons {
    display: flex;
    column-gap: 8px;

    button.icon-button {
        padding: 8px;
        font-size: 1.2em;
        border: 0;
        margin-left: 0;
    }
}

.body-container {
    padding: 16px;
}
</style>
