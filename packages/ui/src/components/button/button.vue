<template>
    <ElPopconfirm
        v-if="myConfirm === 'popconfirm'"
        :title="msg"
        :confirm-button-text="confirmButtonText"
        :cancel-button-text="cancelButtonText"
        :popper-class="`${$style.popper} el-popover`"
        @confirm="handleConfirm"
    >
        <template #reference>
            <ElButton v-bind="$attrs" :type="type" :class="$style.button" @click="handleClick">
                <VcIcon v-if="position === 'left' && name" :type="iconType" :name="name" />
                <span v-if="$slots.default"><slot /></span>
                <VcIcon v-if="position === 'right' && name" :type="iconType" :name="name" />
            </ElButton>
        </template>
    </ElPopconfirm>
    <ElButton v-else v-bind="$attrs" :type="type" :class="$style.button" @click="handleClick">
        <VcIcon v-if="position === 'left' && name" :type="iconType" :name="name" />
        <span v-if="$slots.default"><slot /></span>
        <VcIcon v-if="position === 'right' && name" :type="iconType" :name="name" />
    </ElButton>
</template>

<script lang="ts" setup>
import type { IButtonProps } from './button'
import { ElMessageBox } from 'element-plus'

import { injectConfig } from '../config-provider/config-provider'
import VcIcon from '../icon/icon.vue'

const props = withDefaults(defineProps<IButtonProps>(), {
    time: 800,
    type: '',
    confirm: undefined,
})
const emits = defineEmits<{ (e: 'click', event: Event): void }>()
const { button: buttonConfig } = injectConfig()
const defaultConfirmInfo = { title: '提示', confirmButtonText: '确定', cancelButtonText: '取消', msg: '请确认您的操作' }
const myConfirm = computed(() => buttonConfig?.confirm?.type !== undefined
    ? buttonConfig?.confirm?.type
    : (props.confirm?.type !== undefined
            ? props.confirm.type
            : (['danger', 'warning'].includes(props.type) ? 'messagebox' : undefined)))
const { name, type: iconType = 'el', position = 'left' } = props.icon || {}
const { msg, title, confirmButtonText, cancelButtonText } = { ...defaultConfirmInfo, ...buttonConfig?.confirm, ...props.confirm }
async function handleComfirm() {
    try {
        const result = await ElMessageBox.confirm(msg, title, { confirmButtonText, cancelButtonText, type: 'warning', dangerouslyUseHTMLString: true })
        return result
    }
    catch {
        return false
    }
}
const handleClick = useThrottleFn(async e => {
    if (myConfirm.value === 'messagebox') {
        const result = await handleComfirm()
        result && emits('click', e)
        return
    }
    if (myConfirm.value === 'popconfirm') {
        return
    }
    emits('click', e)
}, props.time)

const handleConfirm = useThrottleFn(async e => {
    emits('click', e)
}, props.time)
</script>

<style lang="scss" module>
.button {
    > span > * + * {
        margin-left: 0.5em;
    }
}

.popper {
    width: auto !important;
    min-width: 150px;
    max-width: 300px;
}
</style>
