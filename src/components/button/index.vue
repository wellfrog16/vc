<template>
    <ElButton v-bind="$attrs" :class="$style.button">
        <HIcon v-if="position === 'left' && name" :type="type" :name="name" />
        <span v-if="$slots.default"><slot /></span>
        <HIcon v-if="position === 'right' && name" :type="type" :name="name" />
    </ElButton>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus'
import HIcon from '../icon/index.vue'
import type { PropType } from 'vue'
import type { IIconOption } from './button'

const props = defineProps({
    icon: { type: Object as PropType<IIconOption> },
})

const { name, type = 'el', position = 'left' } = props.icon || {}
</script>

<style lang="scss" module>
.button {
    > span > * + * {
        margin-left: 0.5em;
    }
}
</style>
