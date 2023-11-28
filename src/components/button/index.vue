<template>
    <ElButton v-bind="$attrs" :type="type" :class="$style.button" @click="handleClick">
        <HIcon v-if="position === 'left' && name" :type="iconType" :name="name" />
        <span v-if="$slots.default"><slot /></span>
        <HIcon v-if="position === 'right' && name" :type="iconType" :name="name" />
    </ElButton>
</template>

<script lang="ts" setup>
import { ElButton, ElMessageBox } from 'element-plus'
import { useThrottleFn } from '@vueuse/core'
import { isBoolean } from 'lodash-es'

import { injectConfig } from '@/components/config-provider/config'
import HIcon from '../icon/index.vue'
import type { ButtonType } from 'element-plus/es/components/button/src/button'
import type { IIconOption } from './button'

interface IPropType {
    icon?: IIconOption
    time?: number
    type?: ButtonType
    confirm?: boolean
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
const defaultConfirmInfo = { title: '提示', confirmButtonText: '确定', cancelButtonText: '取消', msg: '确认要删除这条数据吗' }
const myConfirm = isBoolean(buttonConfig?.confirm) ? buttonConfig?.confirm : (isBoolean(props.confirm) ? props.confirm : (['danger', 'warning'].includes(props.type)))
const { name, type: iconType = 'el', position = 'left' } = props.icon || {}
const handleComfirm = async () => {
    const { msg, title, confirmButtonText, cancelButtonText } = { ...defaultConfirmInfo, ...buttonConfig?.confirmInfo, ...props.confirmInfo }
    try {
        const result = await ElMessageBox.confirm(msg, title, { confirmButtonText, cancelButtonText, type: 'warning', dangerouslyUseHTMLString: true })
        return result
    }
    catch {
        return false
    }
}
const handleClick = useThrottleFn(async e => {
    if (myConfirm) {
        const result = await handleComfirm()
        result && emits('click', e)
        return
    }
    emits('click', e)
}, props.time)
</script>

<style lang="scss" module>
.button {
    > span > * + * {
        margin-left: 0.5em;
    }
}
</style>
