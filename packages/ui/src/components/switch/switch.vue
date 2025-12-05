<template>
    <ElSwitch v-if="disabled || !confirm" v-model="myValue" :class="className" v-bind="$attrs" :disabled="disabled" />
    <ElPopconfirm v-else :title="confirmTitle" v-bind="props.confirmProps" @confirm="handleConfirm">
        <template #reference>
            <span ref="mainRef" :class="$style.main">
                <ElSwitch v-model="myValue" class="h-switch" :class="className" v-bind="$attrs" />
            </span>
        </template>
    </ElPopconfirm>
</template>

<script lang="ts" setup>
import type { ISwitchProps } from './switch'
import { ElPopconfirm, ElSwitch } from 'element-plus'
import { computed, onMounted, useTemplateRef } from 'vue'

const props = withDefaults(defineProps<ISwitchProps>(), {
    confirmTitle: '确认切换吗？',
    disabled: false,
    className: '',
    confirm: false,
})

const emits = defineEmits(['update:modelValue'])
const mainRef = useTemplateRef('mainRef')

function getSwitchEle() {
    if (!mainRef.value) { return }
    const ele = mainRef.value.getElementsByClassName('h-switch')[0]
    return ele as HTMLDivElement
}
const handleConfirm = () => getSwitchEle()?.click()

const myValue = computed({
    get: () => props.modelValue,
    set: val => emits('update:modelValue', val),
})

onMounted(() => {
    getSwitchEle()?.addEventListener('click', (event: Event) => {
        event.stopPropagation()
    })
})
</script>

<style lang="scss" module>
.main {
    position: relative;
    display: inline-block;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        cursor: pointer;
        content: '';
    }
}
</style>
