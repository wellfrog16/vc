<template>
    <component :is="component" v-model="modalVisible">
        <ElForm
            ref="formRef"
            v-loading="loading"
            :label-position="labelPosition"
            :disabled="disabled || !isEditing"
            v-bind="formProps"
            :model="form.fields"
            :rules="form.rules"
            :class="$style.form"
        >
            <slot />
        </ElForm>
        <template #title="{ close }">
            <div :class="$style['header-container']">
                <VcIconifyIcon v-if="icon" :name="icon" :class="$style.icon" />
                <slot name="title" :close="close">{{ modalTitle }}</slot>
            </div>
        </template>
        <template v-if="$slots['footer-extra']" #footer-extra>
            <slot name="footer-extra" />
        </template>
        <template #footer-action>
            <slot name="footer-action" />
            <VcButton v-if="isEditing" :disabled="disabled" :loading="loading" :icon="{ name: 'Close' }" @click="handleCancel">取消</VcButton>
            <VcButton v-if="isEditing" :disabled="disabled" :loading="loading" :icon="{ name: 'Check' }" type="primary" @click="handleSave">保存</VcButton>
            <VcButton v-if="editable && !isEditing" :disabled="disabled" :loading="loading" :icon="{ name: 'EditPen' }" type="primary" @click="handleEdit">编辑</VcButton>
        </template>
    </component>
</template>

<script setup lang="ts">
import type { IExplorerModalFormEmits, IExplorerModalFormProps } from './explorer-modal-form'
import { ElForm } from 'element-plus'
import VcButton from '../button/button.vue'
import VcDialog from '../dialog/dialog.vue'
import VcDrawer from '../drawer/drawer.vue'
import VcIconifyIcon from '../iconify-icon/iconify-icon.vue'

const props = withDefaults(defineProps<IExplorerModalFormProps>(), {
    icon: 'fluent:form-48-regular',
    labelPosition: 'top',
    editable: true,
    editing: true,
    loading: false,
})
const emits = defineEmits<IExplorerModalFormEmits>()

const modalVisible = useVModel(props, 'modelValue', emits)
const formRef = useTemplateRef('formRef')

const isEditing = ref(false)
const component = computed(() => props.type === 'dialog' ? VcDialog : VcDrawer)
const modalTitle = computed(() => props.title || (props.form.fields.id ? '编辑' : '新增'))

function handleCancel() {
    emits('cancel')
    modalVisible.value = false
}

async function handleSave() {
    try {
        const valid = await formRef.value!.validate()
        if (!valid) { return false }

        emits('save', props.form.fields)
        return true
    }
    catch {
        return false
    }
}

function handleEdit() {
    emits('edit')
    isEditing.value = true
}

const visibleWatch = watch(modalVisible, val => {
    if (!val) { return }
    isEditing.value = props.editing ?? true
}, { immediate: true })

defineExpose({ formRef })

onUnmounted(() => { visibleWatch.stop() })
</script>

<style lang="scss" module>
.icon {
    margin-right: 4px;
    font-size: var(--el-font-size-extra-large);
}

.form {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: flex-start;

    :global(> .el-row) {
        margin: 0 !important;
        width: 100%;
    }
}
</style>
