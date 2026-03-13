<template>
    <VcDialog v-model="myVisible" v-bind="$attrs">
        <ElForm
            ref="formRef"
            v-loading="loading"
            require-asterisk-position="right"
            :label-position="labelPosition"
            :disabled="disabled || !isEditing"
            v-bind="formProps"
            :model="form.fields"
            :rules="form.rules"
        >
            <slot />
        </ElForm>
        <template #title="{ close }">
            <div :class="$style['header-container']">
                <VcIconifyIcon v-if="icon" :name="icon" :class="$style.icon" />
                <slot name="title" :close="close">{{ title }}</slot>
            </div>
        </template>
        <template #footer>
            <slot name="action" />
            <VcButton v-if="isEditing" :loading="loading" :icon="{ name: 'Close' }" @click="handleCancel">取消</VcButton>
            <VcButton v-if="isEditing" :loading="loading" :icon="{ name: 'Check' }" type="primary" @click="handleSave">保存</VcButton>
            <VcButton v-if="editable && !isEditing" :loading="loading" :icon="{ name: 'EditPen' }" type="primary" @click="handleEdit">编辑</VcButton>
        </template>
    </VcDialog>
</template>

<script setup lang="ts">
import type { IExplorerDialogFormEmits, IExplorerDialogFormProps } from './explorer-dialog-form'
import VcButton from '../button/button.vue'
import VcDialog from '../dialog/dialog.vue'
import VcIconifyIcon from '../iconify-icon/iconify-icon.vue'

const props = withDefaults(defineProps<IExplorerDialogFormProps>(), {
    icon: 'fluent:form-48-regular',
    labelPosition: 'top',
    editable: true,
    editing: true,
    loading: false,
})
const emits = defineEmits<IExplorerDialogFormEmits>()

const myVisible = useVModel(props, 'visible', emits)
const formRef = useTemplateRef('formRef')
const isEditing = ref(false)

function handleCancel() {
    myVisible.value = false
    emits('cancel')
}

async function handleSave() {
    const valid = await formRef.value!.validate()
    if (!valid) { return }

    emits('save', props.form.fields)
}

function handleEdit() {
    isEditing.value = true
    emits('edit')
}

const visibleWatch = watch(myVisible, val => {
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
    transform: translateY(1px);
}
</style>
