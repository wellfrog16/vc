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
                <HIcon v-if="position === 'left' && name" :type="iconType" :name="name" />
                <span v-if="$slots.default"><slot /></span>
                <HIcon v-if="position === 'right' && name" :type="iconType" :name="name" />
            </ElButton>
        </template>
    </ElPopconfirm>
    <ElButton v-else v-bind="$attrs" :type="type" :class="$style.button" @click="handleClick">
        <HIcon v-if="position === 'left' && name" :type="iconType" :name="name" />
        <span v-if="$slots.default"><slot /></span>
        <HIcon v-if="position === 'right' && name" :type="iconType" :name="name" />
    </ElButton>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { ElButton, ElMessageBox, ElPopconfirm } from 'element-plus'
import { useThrottleFn } from '@vueuse/core'

import { injectConfig } from '@/components/config-provider/config'
import HIcon from '../icon/index.vue'
import type { ButtonType } from 'element-plus/es/components/button/src/button'
import type { IIconOption } from './button'

interface IPropType {
    icon?: IIconOption
    time?: number
    type?: ButtonType
    confirm?: 'popconfirm' | 'messagebox' | 'none' // 非 popconfirm， messagebox 的其他值不会执行 confirm
    confirmInfo?: {
        title?: string
        confirmButtonText?: string
        cancelButtonText?: string
        msg?: string
    }
}

const props = withDefaults(defineProps<IPropType>(), {
    time: 800,
    type: '',
    confirm: undefined,
})
const emits = defineEmits<{ (e: 'click', event: Event): void }>()
const { button: buttonConfig } = injectConfig()
const defaultConfirmInfo = { title: '提示', confirmButtonText: '确定', cancelButtonText: '取消', msg: '确认要删除这条数据吗？' }
const myConfirm = computed(() => buttonConfig?.confirm !== undefined
    ? buttonConfig?.confirm
    : (props.confirm !== undefined
        ? props.confirm
        : (['danger', 'warning'].includes(props.type) ? 'messagebox' : undefined)))
const { name, type: iconType = 'el', position = 'left' } = props.icon || {}
const { msg, title, confirmButtonText, cancelButtonText } = { ...defaultConfirmInfo, ...buttonConfig?.confirmInfo, ...props.confirmInfo }
const handleComfirm = async () => {
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
