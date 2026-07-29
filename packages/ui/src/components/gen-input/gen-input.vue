<template>
    <div :class="$style['gen-input']">
        <VcInput v-model="myModelValue" :disabled="disabled || checked" :placeholder="placeholder" v-bind="$attrs" />
        <ElCheckbox v-model="checked" :disabled="disabled" :class="$style.checkbox" @change="handleChange">{{ checkboxLabel }}</ElCheckbox>
    </div>
</template>

<script setup lang="ts">
import type { IGenInputEmits, IGenInputProps } from './gen-input'
import VcInput from '../input/input.vue'

const props = withDefaults(defineProps<IGenInputProps>(), {
    checkboxLabel: '自动生成',
    defaultChecked: true,
    placeholder: '请输入唯一编码',
    genPlaceholder: '根据规则自动生成',
})
const emits = defineEmits<IGenInputEmits>()

const myModelValue = useVModel(props, 'modelValue', emits)
const checked = ref(props.defaultChecked)
const placeholder = computed(() => (checked.value ? props.genPlaceholder : props.placeholder))
function handleChange() {
    myModelValue.value = ''
}
</script>

<style lang="scss" module>
.gen-input {
    display: flex;
    align-items: center;
    width: 100%;
}

.checkbox {
    margin-left: 12px;
    flex-shrink: 0;
}
</style>
