<template>
    <ElDrawer v-if="visible || !lazy" v-model="drawerVisible" v-bind="$attrs" :class="$style.main">
        <template #header><div><slot name="header">{{ title }}</slot></div></template>
        <div class="drawer-body">
            <ElScrollbar class="drawer-scrollbar">
                <slot />
            </ElScrollbar>
        </div>
        <div v-if="$slots.footer" class="drawer-footer"><slot name="footer" /></div>
    </ElDrawer>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { ElDrawer, ElScrollbar } from 'element-plus'

const props = defineProps({
    modelValue: { type: Boolean, required: true, default: false },
    title: { type: String, default: '对话框' },
    lazy: { type: Boolean, default: true },
    destoryDelay: { type: Number, default: 300 },
})
const emits = defineEmits(['update:modelValue'])
const drawerVisible = computed({
    get: () => props.modelValue,
    set: val => emits('update:modelValue', val),
})
const visible = ref(false) // 用于销毁对话框以及非开启状态时不渲染

watch(drawerVisible, val => {
    if (val) { visible.value = true }
    else {
        setTimeout(() => { visible.value = false }, props.destoryDelay)
    }
})
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
            flex-grow: 1;
            height: 100px;
            overflow: hidden;
        }

        .drawer-scrollbar {
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
