<template>
    <ElButton v-bind="$attrs" :class="$style.button" @click="handleClick">
        <HIcon v-if="position === 'left' && name" :type="type" :name="name" />
        <span v-if="$slots.default"><slot /></span>
        <HIcon v-if="position === 'right' && name" :type="type" :name="name" />
    </ElButton>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus'
import { useThrottleFn } from '@vueuse/core'

import HIcon from '../icon/index.vue'
import type { IIconOption } from './button'

interface IPropType {
    icon?: IIconOption
    time?: number
}

const props = withDefaults(defineProps<IPropType>(), { time: 800 })
const emits = defineEmits<{ (e: 'click', event: Event): void }>()

const { name, type = 'el', position = 'left' } = props.icon || {}
const handleClick = useThrottleFn(e => emits('click', e), props.time)
</script>

<style lang="scss" module>
.button {
    > span > * + * {
        margin-left: 0.5em;
    }
}
</style>
