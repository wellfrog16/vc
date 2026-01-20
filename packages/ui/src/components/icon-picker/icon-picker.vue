<template>
    <ElPopover v-model:visible="visible" placement="bottom-start" trigger="click" width="350px">
        <template #reference>
            <VcInput v-model="myValue" :class="$style.input" v-bind="$attrs">
                <template #prepend>
                    <VcIconifyIcon :name="iconName" size="24" />
                </template>
            </VcInput>
        </template>
        <Panel v-if="panelVisible" v-bind="props" @choiced="handleChoiced" />
    </ElPopover>
</template>

<script setup lang="ts">
import type { IIconPickerProps } from './icon-picker'
import { useVModel } from '@vueuse/core'
import VcIconifyIcon from '@/components/iconify-icon/iconify-icon.vue'
import VcInput from '@/components/input/input.vue'
import Panel from './components/panel.vue'

const props = defineProps<IIconPickerProps>()
const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'change', value: string): void
}>()
const visible = ref(false)
const panelVisible = ref(false)

const myValue = useVModel(props, 'modelValue', emits)
const iconName = computed(() => myValue.value || 'lucide:grip')

function handleChoiced(icon: string) {
    myValue.value = icon
    visible.value = false
    emits('change', icon)
}

const pickerVisibleWatch = watch(visible, val => {
    if (!val) { return }
    panelVisible.value = true
    pickerVisibleWatch.stop()
})
</script>

<style lang="scss" module>
.input {
    :global {
        .el-input-group__prepend {
            padding: 0 4px;
            cursor: pointer;
        }
    }
}
</style>
