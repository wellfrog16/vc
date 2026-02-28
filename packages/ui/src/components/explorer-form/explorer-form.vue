<template>
    <div v-loading="loading" :class="$style['explorer-form']">
        <div :class="$style.header">
            <div :class="$style['header-container']"><VcIconifyIcon v-if="icon" :name="icon" :class="$style.icon" /><slot name="title">{{ title }}</slot></div>
            <div :class="$style.actions">
                <VcButton v-if="isEditing" :icon="{ type: 'el', name: 'Close' }" @click="handleCancel">取消</VcButton>
                <VcButton v-if="isEditing" type="primary" :icon="{ type: 'el', name: 'Check' }" @click="handleSave">保存</VcButton>
                <VcButton v-if="!isEditing" type="primary" :icon="{ type: 'el', name: 'Edit' }" @click="handleEdit">编辑</VcButton>
                <slot name="action" />
            </div>
        </div>
        <VcScrollbar always>
            <ElForm
                ref="formRef"
                v-bind="formProps"
                :model="form.fields"
                :rules="form.rules"
                :disabled="!isEditing"
                require-asterisk-position="right"
                :label-position="labelPosition"
            >
                <slot />
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
    autoInitial: true,
    labelPosition: 'top',
    onCancel: () => {},
    onSave: () => {},
})
const emits = defineEmits<IExplorerFormEmits>()

const isEditing = ref(false)
const loading = ref(false)
const formRef = useTemplateRef<InstanceType<typeof ElForm>>('formRef')

function handleEdit() {
    emits('clickEdit')
    isEditing.value = true
}

async function handleCancel() {
    formRef.value!.resetFields()
    await props.onCancel()
    isEditing.value = false
}

async function handleSave() {
    const valid = await formRef.value!.validate()
    if (!valid) { return }

    await props.onSave(props.form.fields)
    formRef.value?.setInitialValues(props.form.fields)
    isEditing.value = false
}

const editingWatch = watch(() => props.defaultEditing, val => { isEditing.value = val }, { immediate: true })

const autoInitialWatch = watch(() => props.form.fields, val => {
    props.autoInitial && formRef.value?.setInitialValues(val)
}, { immediate: true })

const initialValuesWatch = watch(() => props.initialValues, () => {
    props.initialValues && formRef.value?.setInitialValues(props.initialValues)
}, { immediate: true, deep: true })

onBeforeUnmount(() => {
    initialValuesWatch.stop()
    autoInitialWatch.stop()
    editingWatch.stop()
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
    font-size: 1.2em;
}

.icon {
    margin-right: 4px;
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

// .scrollbar {
//     :global(.el-scrollbar__wrap > .el-scrollbar__view) {
//         padding-right: 12px;
//     }
// }
</style>
