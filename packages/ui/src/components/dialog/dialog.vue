<template>
    <ElDialog
        v-if="visible || !lazy"
        v-model="dialogVisible"
        v-bind="$attrs"
        align-center
        :show-close="false"
        :fullscreen="isFullscreen"
        :close-on-click-modal="false"
        :class="$style.main"
        @closed="handleClosed"
    >
        <template #header="{ close, titleId, titleClass }">
            <div :class="$style.header">
                <span :id="titleId" :class="[titleClass, $style.title]">
                    <slot name="header" :close="close">{{ title }}</slot>
                </span>
                <span :class="$style.buttons">
                    <ElButton v-show="showFullscreen" :icon="Icon" plain @click="() => toggleFullscreen()" />
                    <ElButton :icon="Close" plain @click="close" />
                </span>
            </div>
        </template>
        <template #default>
            <ElScrollbar v-if="!isFullscreen && (height || maxHeight)" :class="scrollbarClassName" :height="height" :max-height="maxHeight" always>
                <div :class="$style['body-container']"><slot /></div>
            </ElScrollbar>
            <ElScrollbar v-else :class="scrollbarClassName" :max-height="fullscreenHeight" always>
                <div :class="$style['body-container']"><slot /></div>
            </ElScrollbar>
        </template>
        <template v-if="showDefaultFooter || $slots.footer" #footer><slot name="footer"><HButton v-if="showDefaultFooter" @click="dialogVisible = false">关闭</HButton></slot></template>
    </ElDialog>
</template>

<script lang="ts" setup>
import type { IDialogProps } from './dialog'

import { Close, CopyDocument, FullScreen } from '@element-plus/icons-vue'
import { useToggle, useVModel } from '@vueuse/core'
import { ElButton, ElDialog, ElScrollbar } from 'element-plus'
import { computed, ref, useCssModule, watch } from 'vue'

import HButton from '../button/button.vue'

const props = withDefaults(defineProps<IDialogProps>(), {
    title: '对话框',
    showFullscreen: true,
    showDefaultFooter: false,
    lazy: true,
    fullscreenHeight: 'calc(100vh - 146px)',
    flex: false,
    fullscreen: false,
    boxPadding: true,
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'closed'): void
}>()
const $style = useCssModule()
const dialogVisible = useVModel(props, 'modelValue', emits)
const visible = ref(false) // 用于销毁对话框以及非开启状态时不渲染
const isFullscreen = ref(false)
const toggleFullscreen = useToggle(isFullscreen)
const Icon = computed(() => isFullscreen.value ? CopyDocument : FullScreen)
const scrollbarClassName = computed(() => ({
    [$style.scrollbar]: true,
    [$style.flex]: props.flex,
}))

watch(dialogVisible, val => {
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
div.main {
    --el-dialog-padding-primary: 0;

    display: flex;
    flex-direction: column;

    :global {
        .el-dialog__header {
            padding: 12px 16px;
            margin-right: 0;
            border-bottom: 1px solid var(--el-border-color-light);
        }

        .el-dialog__body {
            flex-grow: 1;
            padding: 0;
        }

        .el-dialog__footer {
            padding: 12px 16px;
            border-top: 1px solid var(--el-border-color-light);
        }
    }

    :global(> .el-dialog__body > .el-scrollbar) {
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: calc(100% - 8px);
            height: 100%;
            background: var(--el-color-white);
            height: 16px;
            z-index: 3;
            display: v-bind('boxPadding ? "block" : "none"');
            // background-image: radial-gradient(transparent 1px, var(--el-color-white) 1px);
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
            background: var(--el-color-white);
            height: 16px;
            z-index: 3;
            display: v-bind('boxPadding ? "block" : "none"');
        }
    }

    .header {
        h4 {
            font-size: 1.2em;
            font-weight: 600;
            line-height: 1;
        }
        line-height: 1;
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

.title {
    display: flex;
    align-items: center;
}

.scrollbar {
    &:global {
        > .el-scrollbar__wrap {
            display: flex;
            flex-direction: column;

            & > .el-scrollbar__view {
                flex-grow: 1;
                min-height: 100px;
            }
        }
    }

    &.flex:global {
        > .el-scrollbar__wrap > .el-scrollbar__view {
            display: flex;
            flex-direction: column;
        }
    }
}

.body-container {
    padding: 16px;
}

.buttons {
    button {
        padding: 8px;
        font-size: 1.2em;
        border: 0;
    }
}
</style>
