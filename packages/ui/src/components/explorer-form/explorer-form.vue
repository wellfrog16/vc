<template>
    <div v-loading="loading" :class="$style['explorer-form']">
        <div :class="$style.header">
            <div :class="$style['header-container']"><VcIconifyIcon v-if="icon" :name="icon" :class="$style.icon" /><slot name="title">{{ title }}</slot></div>
            <div :class="$style.actions">
                <slot name="action" />
                <VcButton v-if="editable && isEditing && showCancel" :disabled="disabled" :icon="{ name: 'Close' }" @click="handleCancel">取消</VcButton>
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
                :disabled="isDisabled"
                :label-position="labelPosition"
                :class="$style.form"
            >
                <slot :is-editing="isEditing" :is-disabled="isDisabled" />
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
    showCancel: true,
})
const emits = defineEmits<IExplorerFormEmits>()

const isEditing = ref(props.editing ?? true)
const formRef = useTemplateRef<InstanceType<typeof ElForm>>('formRef')

const isDisabled = computed(() => props.disabled || !isEditing.value || !props.editable)

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
    flex-grow: 1;
    flex-direction: column;
    height: 100px;
}

.header {
    display: flex;
    row-gap: 8px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--el-border-color-lighter);
    padding-bottom: 7px;
    color: var(--el-text-color-regular);
}

.header-container {
    font-size: var(--el-font-size-medium);
}

.icon {
    transform: translateY(1px);
    margin-right: 4px;
    font-size: var(--el-font-size-extra-large);
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
    flex-direction: column;
    align-items: flex-start;

    :global(> .el-row) {
        margin: 0 !important;
        width: 100%;
    }
}

.scrollbar {
    margin: 0 -8px;
}
</style>
