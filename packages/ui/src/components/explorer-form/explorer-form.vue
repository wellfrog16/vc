<template>
    <div v-loading="loading" :class="$style['explorer-form']">
        <div :class="$style.header">
            <div :class="$style['header-container']"><VcIconifyIcon v-if="icon" :name="icon" :class="$style.icon" /><slot name="title">{{ title }}</slot></div>
            <div :class="$style.actions">
                <slot name="action" />
                <VcButton v-if="editable && isEditing" :disabled="disabled" :icon="{ name: 'Close' }" @click="handleCancel">取消</VcButton>
                <VcButton v-if="editable && isEditing" :disabled="disabled" :icon="{ name: 'Check' }" type="primary" @click="handleSave">保存</VcButton>
                <VcButton v-if="editable && !isEditing" :disabled="disabled" :icon="{ name: 'EditPen' }" type="primary" @click="handleEdit">编辑</VcButton>
            </div>
        </div>
        <VcScrollbar always :class="$style.scrollbar">
            <ElForm
                ref="formRef"
                v-bind="formProps"
                :model="form.fields"
                :rules="form.rules"
                :disabled="disabled || !isEditing || !editable"
                require-asterisk-position="right"
                :label-position="labelPosition"
                :class="$style.form"
            >
                <slot :is-editing="isEditing" />
            </ElForm>
        </VcScrollbar>
    </div>
</template>

<script setup lang="ts">
import type { IExplorerFormEmits, IExplorerFormProps } from './explorer-form'
import { ElForm } from 'element-plus'
import VcButton from '../button/button.vue'
import VcIconifyIcon from '../iconify-icon/iconify-icon.vue'
import VcScrollbar from '../scrollbar/scrollbar.vue'

const props = withDefaults(defineProps<IExplorerFormProps>(), {
    icon: 'fluent:form-48-regular',
    labelPosition: 'top',
    editable: true,
    editing: true,
    loading: false,
})
const emits = defineEmits<IExplorerFormEmits>()

const isEditing = ref(props.editing ?? true)
const formRef = useTemplateRef<InstanceType<typeof ElForm>>('formRef')

function handleEdit() {
    emits('edit')
    isEditing.value = true
}

async function handleCancel() {
    emits('cancel')
    formRef.value!.resetFields()
    isEditing.value = false
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

defineExpose({
    formRef,
    update: (data?: Record<string, any>) => { formRef.value?.setInitialValues(data || props.form.fields) },
    toggleEditing: (val?: boolean) => { isEditing.value = val ?? !isEditing.value },
})
</script>

<style lang="scss" module>
.explorer-form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--el-border-color-lighter);
    padding-bottom: 7px;
    box-sizing: border-box;
    margin-bottom: 8px;
    color: var(--el-text-color-regular);
    flex-wrap: wrap;
    row-gap: 8px;
}

.header-container {
    font-size: var(--el-font-size-medium);
}

.icon {
    margin-right: 4px;
    font-size: var(--el-font-size-extra-large);
    transform: translateY(1px);
}

.actions {
    display: flex;
    align-items: center;
    gap: 8px;

    :global {
        .el-button {
            margin-left: 0 !important;
        }
    }
}

.form {
    display: flex;
    flex-grow: 1;
    align-items: flex-start;
    flex-direction: column;

    :global(> .el-row) {
        width: 100%;
        margin: 0 !important;
    }
}

.scrollbar {
    margin: 0 -8px;
}
</style>
