<template>
    <ElDialog
        v-if="visible || !lazy"
        v-model="dialogVisible"
        v-bind="$attrs"
        align-center
        :show-close="false"
        :fullscreen="isFullscreen"
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
            <ElScrollbar v-if="!isFullscreen && (height || maxHeight)" :class="scrollbarClassName" :height="height" :max-height="maxHeight">
                <slot />
            </ElScrollbar>
            <ElScrollbar v-else :class="scrollbarClassName" :max-height="fullscreenHeight">
                <slot />
            </ElScrollbar>
        </template>
        <template v-if="showDefaultFooter || $slots.footer" #footer><slot name="footer"><HButton v-if="showDefaultFooter" @click="dialogVisible = false">关闭</HButton></slot></template>
    </ElDialog>
</template>

<script lang="ts" setup>
import { computed, ref, useCssModule, watch } from 'vue'
import { ElButton, ElDialog, ElScrollbar } from 'element-plus'
import { Close, CopyDocument, FullScreen } from '@element-plus/icons-vue'
import { useToggle } from '@vueuse/core'

import HButton from '@/components/button/index.vue'

interface IPropType {
    modelValue: boolean
    title?: string
    showFullscreen?: boolean
    showDefaultFooter?: boolean
    lazy?: boolean
    height?: string | number
    maxHeight?: string | number
    fullscreenHeight?: string | number
    flex?: boolean
}

const props = withDefaults(defineProps<IPropType>(), {
    modelValue: false,
    title: '对话框',
    showFullscreen: true,
    showDefaultFooter: false,
    lazy: true,
    fullscreenHeight: 'calc(100vh - 146px)',
    flex: false,
})

const emits = defineEmits(['update:modelValue', 'closed'])
const $style = useCssModule()
const dialogVisible = computed({
    get: () => props.modelValue,
    set: val => emits('update:modelValue', val),
})
const visible = ref(false) // 用于销毁对话框以及非开启状态时不渲染
const isFullscreen = ref(false)
const toggleFullscreen = useToggle(isFullscreen)
const Icon = computed(() => isFullscreen.value ? CopyDocument : FullScreen)
const scrollbarClassName = computed(() => ({
    [$style.scrollbar]: true,
    [$style.flex]: props.flex,
}))

watch(dialogVisible, val => {
    if (val) { visible.value = true }
})

const handleClosed = () => {
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
            padding: 16px;
        }

        .el-dialog__footer {
            padding: 12px 16px;
            border-top: 1px solid var(--el-border-color-light);
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

.buttons {
    button {
        padding: 8px;
        font-size: 1.2em;
        border: 0;
    }
}
</style>
