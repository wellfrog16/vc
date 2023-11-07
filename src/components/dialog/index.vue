<template>
    <ElDialog
        v-if="visible || !lazy"
        v-model="dialogVisible"
        v-bind="$attrs"
        align-center
        :show-close="false"
        :fullscreen="isFullscreen"
        :class="$style.main"
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
        <template #default><slot /></template>
        <template #footer><slot name="footer" /></template>
    </ElDialog>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import { Close, CopyDocument, FullScreen } from '@element-plus/icons-vue'
import { useToggle } from '@vueuse/core'

const props = defineProps({
    modelValue: { type: Boolean, required: true, default: false },
    title: { type: String, default: '对话框' },
    showFullscreen: { type: Boolean, default: true },
    lazy: { type: Boolean, default: true },
    destoryDelay: { type: Number, default: 300 },
})
const emits = defineEmits(['update:modelValue'])
const dialogVisible = computed({
    get: () => props.modelValue,
    set: val => emits('update:modelValue', val),
})
const visible = ref(false) // 用于销毁对话框以及非开启状态时不渲染
const isFullscreen = ref(false)
const toggleFullscreen = useToggle(isFullscreen)
const Icon = computed(() => isFullscreen.value ? CopyDocument : FullScreen)

watch(dialogVisible, val => {
    if (val) { visible.value = true }
    else {
        setTimeout(() => { visible.value = false }, props.destoryDelay)
    }
})
</script>

<style lang="scss" module>
.main {
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

.buttons {
    button {
        padding: 8px;
        border: 0;
    }
}
</style>
