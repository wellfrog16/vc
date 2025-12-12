<template>
    <ElDrawer v-if="visible || !lazy" v-model="drawerVisible" v-bind="$attrs" :close-on-click-modal="false" :class="$style.main" @closed="handleClosed">
        <template #header><div><slot name="header">{{ title }}</slot></div></template>
        <ElScrollbar class="drawer-scrollbar" always>
            <div :class="$style['body-container']"><slot /></div>
        </ElScrollbar>
        <div v-if="showDefaultFooter || $slots.footer" class="drawer-footer"><slot name="footer"><VcButton @click="drawerVisible = false">关闭</VcButton></slot></div>
    </ElDrawer>
</template>

<script lang="ts" setup>
import type { IDrawerProps } from './drawer'
import VcButton from '../button/button.vue'

const props = withDefaults(defineProps<IDrawerProps>(), {
    title: '对话框',
    lazy: true,
    showDefaultFooter: false,
    boxPadding: true,
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
            padding: 10px 16px;
            margin-bottom: 0;
            border-bottom: 1px solid var(--el-border-color-light);
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
            padding: 10px 16px;
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
}

.body-container {
    padding: 16px;
}
</style>
