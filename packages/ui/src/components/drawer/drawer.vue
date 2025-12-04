<template>
    <ElDrawer v-if="visible || !lazy" v-model="drawerVisible" v-bind="$attrs" :close-on-click-modal="false" :class="$style.main" @closed="handleClosed">
        <template #header><div><slot name="header">{{ title }}</slot></div></template>
        <div class="drawer-body">
            <ElScrollbar class="drawer-scrollbar">
                <slot />
            </ElScrollbar>
        </div>
        <div v-if="showDefaultFooter || $slots.footer" class="drawer-footer"><slot name="footer"><HButton @click="drawerVisible = false">关闭</HButton></slot></div>
    </ElDrawer>
</template>

<script lang="ts" setup>
import type { IDrawerProps } from './drawer'
import { useVModel } from '@vueuse/core'
import { ElDrawer, ElScrollbar } from 'element-plus'

import { ref, watch } from 'vue'
import HButton from '../button/button.vue'

const props = withDefaults(defineProps<IDrawerProps>(), {
    title: '对话框',
    lazy: true,
    showDefaultFooter: false,
})

const emits = defineEmits<{
    (e: 'update:modelValue', val: boolean): void
    (e: 'closed'): void
}>()

const drawerVisible = useVModel(props, 'modelValue', emits)
const visible = ref(false) // 用于销毁对话框以及非开启状态时不渲染

watch(drawerVisible, val => {
    if (val) { visible.value = true }
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
            padding: 10px 20px;
            margin-bottom: 0;
            border-bottom: 1px solid var(--el-border-color-light);
        }

        .el-drawer__body {
            display: flex;
            flex-direction: column;
            padding: 0;
            overflow: hidden;
        }

        .drawer-body {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            height: 100px;
            overflow: hidden;
        }

        .el-scrollbar__view {
            padding: 20px;
        }

        .drawer-footer {
            display: flex;
            flex: 0 0 auto;
            padding: 10px 20px;
            border-top: 1px solid var(--el-border-color-light);

            .el-button {
                flex-grow: 1;
            }
        }
    }
}
</style>
