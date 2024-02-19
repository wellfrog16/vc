<template>
    <ElSwitch v-if="disabled || !confirm" v-model="myValue" :class="className" v-bind="$attrs" :disabled="disabled" />
    <ElPopconfirm v-else :title="confirmTitle" @confirm="handleConfirm">
        <template #reference>
            <span ref="mainEle" :class="$style.main">
                <ElSwitch v-model="myValue" class="h-switch" :class="className" v-bind="$attrs" />
            </span>
        </template>
    </ElPopconfirm>
</template>

<script lang="ts" setup>
import { ElPopconfirm, ElSwitch } from 'element-plus'
import { computed, onMounted, ref } from 'vue'

interface IPropType {
    modelValue: IGlobal.BaseType
    confirmTitle: string
    disabled: boolean
    className: string
    confirm: boolean
}

const props = withDefaults(defineProps<IPropType>(), {
    confirmTitle: '确认切换吗？',
    disabled: false,
    className: '',
    confirm: false,
})

const emit = defineEmits(['update:modelValue', 'change'])

const mainEle = ref<HTMLSpanElement>()

const getSwitchEle = () => {
    if (!mainEle.value) { return }
    const ele = mainEle.value.getElementsByClassName('h-switch')[0]
    return ele as HTMLDivElement
}
const handleConfirm = () => getSwitchEle()?.click()

const myValue = computed({
    get: () => props.modelValue,
    set: val => emit('update:modelValue', val),
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
