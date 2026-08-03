<template>
    <ElSwitch v-if="formDisabled || !confirm" v-model="myValue" :class="className" v-bind="$attrs" :disabled="formDisabled" @click.stop />
    <ElPopconfirm v-else :title="confirmTitle" v-bind="props.confirmProps" @confirm="handleConfirm">
        <template #reference>
            <span ref="mainRef" :class="$style.main" @click.stop>
                <ElSwitch v-model="myValue" class="vc-switch" :class="className" v-bind="$attrs" :disabled="formDisabled" />
            </span>
        </template>
    </ElPopconfirm>
</template>

<script lang="ts" setup>
import type { ISwitchProps } from './switch'
import { useFormDisabled } from 'element-plus'

const props = withDefaults(defineProps<ISwitchProps>(), {
    confirmTitle: '确认切换吗？',
    disabled: undefined,
    className: '',
    confirm: false,
})

const emits = defineEmits(['update:modelValue'])
const myValue = useVModel(props, 'modelValue', emits)
const mainRef = useTemplateRef('mainRef')
const formDisabled = useFormDisabled()

function getSwitchEle() {
    if (!mainRef.value) { return }
    const ele = mainRef.value.getElementsByClassName('vc-switch')[0]
    return ele as HTMLDivElement
}
const handleConfirm = () => getSwitchEle()?.click()
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
