<template>
    <ElDialog
        v-if="visible || !lazy"
        v-model="dialogVisible"
        append-to-body
        align-center
        :width="myWidth"
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
            <VcScrollbar :max-height="myMaxHeight" :height="myHeight" always :view-margin="viewMargin" :fill-height="false">
                <slot />
            </VcScrollbar>
        </template>
        <template v-if="showDefaultFooter || $slots['footer-action'] || $slots['footer-extra']" #footer>
            <div><slot name="footer-extra" /></div>
            <div><slot name="footer-action"><VcButton v-if="showDefaultFooter" @click="dialogVisible = false">关闭</VcButton></slot></div>
        </template>
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
    maxHeight: 'calc(100vh - 98px)',
    width: '960px',
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'closed'): void
}>()
const $style = useCssModule()
const $slots = useSlots()
const dialogVisible = useVModel(props, 'modelValue', emits)
const visible = ref(false) // 用于销毁对话框以及非开启状态时不渲染
const isFullscreen = ref(false)
const toggleFullscreen = useToggle(isFullscreen)
const Icon = computed(() => isFullscreen.value ? CopyDocument : FullScreen)

// header + footer 高度
const extraHeight = computed(() => {
    if (props.showDefaultFooter || $slots['footer-action'] || $slots['footer-extra']) { return '98px' }
    return '49px'
})

const myFullscreenHeight = computed(() => {
    if (props.fullscreenHeight) { return props.fullscreenHeight }
    return `calc(100vh - ${extraHeight.value})`
})

const myMaxHeight = computed(() => {
    if (isFullscreen.value || !props.maxHeight) { return myFullscreenHeight.value }
    return props.maxHeight
})

const myWidth = computed(() => {
    if (props.smallFullscreen) { return 'calc(100vw - 100px)' }
    return props.width
})

const myHeight = computed(() => {
    if (props.smallFullscreen) { return `calc(100vh - 100px - ${extraHeight.value})` }
    if (typeof props.height === 'string') {
        return `calc(${props.height} - ${extraHeight.value})`
    }
    return props.height
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
            margin-right: 0;
            border-bottom: 1px solid var(--el-border-color-light);
            padding: 8px 16px;
        }

        .el-dialog__body {
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            padding: var(--vc-dialog-padding);
        }

        .el-dialog__footer {
            display: flex;
            justify-content: space-between;
            border-top: 1px solid var(--el-border-color-light);
            padding: 8px 16px;
        }
    }

    :global(> .el-dialog__body > .el-scrollbar) {
        position: relative;
        &::before {
            display: var(--vc-dialog-boxPadding);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 3;
            background: var(--el-bg-color);
            width: calc(100% - 8px);
            height: 100%;
            height: 12px;
            content: '';
            // background-image: radial-gradient(transparent 1px, var(--el-bg-color) 1px);
            // background-size: 4px 4px;
            // backdrop-filter: saturate(50%) blur(4px);
        }

        &::after {
            display: var(--vc-dialog-boxPadding);
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 3;
            background: var(--el-bg-color);
            width: calc(100% - 8px);
            height: 100%;
            height: 12px;
            content: '';
        }
    }

    .header {
        line-height: 1;
        h4 {
            font-weight: 600;
            font-size: 1.2em;
            line-height: 1;
        }
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
        margin: 0 !important;
        padding: 0;
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
        margin-left: 0;
        border: 0;
        padding: 8px;
        font-size: 1.2em;
    }
}
</style>
