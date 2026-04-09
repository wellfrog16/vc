<template>
    <component :is="component" v-model="modalVisible" v-bind="$attrs">
        <component
            :is="formComponent"
            ref="formRef"
            v-loading="loading"
            require-asterisk-position="right"
            :label-position="labelPosition"
            :disabled="disabled || !isEditing"
            v-bind="formProps"
            :model="form.fields"
            :rules="form.rules"
            :class="$style.form"
        >
            <slot />
        </component>
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

// 用于解决 form 和 form slot 里的 form-item 不是同一个源问题
// 会导致 form-item 的 label、required 等属性不生效
const formComponent = shallowRef(ElForm)

const isEditing = ref(false)
const component = computed(() => props.type === 'dialog' ? VcDialog : VcDrawer)
const modalTitle = computed(() => props.title || (props.form.fields.id ? '编辑' : '新增'))

function handleCancel() {
    modalVisible.value = false
    emits('cancel')
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
    isEditing.value = true
    emits('edit')
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
    align-items: flex-start;

    :global(> .el-row) {
        flex-grow: 1;
        margin: 0 !important;
    }
}
</style>
