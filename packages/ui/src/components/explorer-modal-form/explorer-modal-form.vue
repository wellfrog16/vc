<template>
    <component :is="component" v-model="modalVisible" v-bind="$attrs">
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
                <slot name="title" :close="close">{{ modalTitle }}</slot>
            </div>
        </template>
        <template #footer>
            <slot name="action" />
            <VcButton v-if="isEditing" :loading="loading" :icon="{ name: 'Close' }" @click="handleCancel">取消</VcButton>
            <VcButton v-if="isEditing" :loading="loading" :icon="{ name: 'Check' }" type="primary" @click="handleSave">保存</VcButton>
            <VcButton v-if="editable && !isEditing" :loading="loading" :icon="{ name: 'EditPen' }" type="primary" @click="handleEdit">编辑</VcButton>
        </template>
    </component>
</template>

<script setup lang="ts">
import type { IExplorerModalFormEmits, IExplorerModalFormProps } from './explorer-modal-form'
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
    modalVisible.value = false
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

// 解决向 slot 传递的问题
function fixLabelPosition() {
    const formItems = formRef.value?.$el.querySelectorAll('.el-form-item')

    if (props.labelPosition === 'top') {
        formItems.forEach((formItem: HTMLElement) => formItem.classList.add('el-form-item--label-top'))
    }
    if (props.labelPosition === 'right') {
        formItems.forEach((formItem: HTMLElement) => formItem.classList.add('el-form-item--label-right'))
    }
}

const visibleWatch = watch(modalVisible, val => {
    if (!val) { return }
    isEditing.value = props.editing ?? true

    nextTick(() => fixLabelPosition())
}, { immediate: true })

defineExpose({ formRef, fixLabelPosition })

onUnmounted(() => { visibleWatch.stop() })
</script>

<style lang="scss" module>
.icon {
    margin-right: 4px;
    font-size: var(--el-font-size-extra-large);
}
</style>
