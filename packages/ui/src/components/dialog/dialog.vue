<template>
    <ElDialog
        v-if="visible || !lazy"
        v-model="dialogVisible"
        v-bind="$attrs"
        append-to-body
        align-center
        :width="width"
        :show-close="false"
        :fullscreen="isFullscreen"
        :close-on-click-modal="false"
        :class="$style.main"
        :style="{
            '--vc-dialog-boxPadding': boxPadding ? 'block' : 'none',
            '--vc-dialog-padding': padding,
        }"
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
        <template #default>
            <VcScrollbar :max-height="myMaxHeight" :height="height" always :view-margin="viewMargin" :fill-height="false">
                <slot />
            </VcScrollbar>
        </template>
        <template v-if="showDefaultFooter || $slots.footer" #footer><slot name="footer"><VcButton v-if="showDefaultFooter" @click="dialogVisible = false">关闭</VcButton></slot></template>
    </ElDialog>
</template>

<script lang="ts" setup>
import type { IDialogProps } from './dialog'
import { Close, CopyDocument, FullScreen } from '@element-plus/icons-vue'
import VcButton from '../button/button.vue'
import VcScrollbar from '../scrollbar/scrollbar.vue'

const props = withDefaults(defineProps<IDialogProps>(), {
    title: '对话框',
    showFullscreen: true,
    showDefaultFooter: false,
    lazy: true,
    fullscreen: false,
    boxPadding: true,
    padding: '0px',
    viewMargin: '12px',
    maxHeight: '80vh',
    width: '960px',
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

const myFullscreenHeight = computed(() => {
    if (props.fullscreenHeight) { return props.fullscreenHeight }
    return props.showDefaultFooter ? 'calc(100vh - 98px)' : 'calc(100vh - 49px)'
})

const myMaxHeight = computed(() => {
    if (isFullscreen.value || !props.maxHeight) { return myFullscreenHeight.value }
    return props.maxHeight
})

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
            padding: 8px 16px;
            margin-right: 0;
            border-bottom: 1px solid var(--el-border-color-light);
        }

        .el-dialog__body {
            flex-grow: 1;
            padding: var(--vc-dialog-padding);
            display: flex;
            flex-direction: column;
        }

        .el-dialog__footer {
            padding: 8px 16px;
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
            background: var(--el-bg-color);
            height: 12px;
            z-index: 3;
            display: var(--vc-dialog-boxPadding);
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
            height: 12px;
            z-index: 3;
            display: var(--vc-dialog-boxPadding);
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

.box-padding {
    :global(> .el-dialog__body > .el-scrollbar) {
        position: relative;
        &::before {
            display: block;
        }

        &::after {
            display: block;
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

.title {
    display: flex;
    align-items: center;
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
</style>
