<template>
    <ElInput ref="refInput" :class="className">
        <template v-if="$slots.prefix" #prefix><slot name="prefix" /></template>
        <template v-if="$slots.suffix" #suffix><slot name="suffix" /></template>
        <template v-if="$slots.prepend" #prepend><slot name="prepend" /></template>
        <template v-if="$slots.append" #append><slot name="append" /></template>
    </ElInput>
</template>

<script lang="ts" setup>
import { computed, shallowRef, useCssModule } from 'vue'
import { ElInput } from 'element-plus'

interface IpropType {
    block?: boolean
    width?: string
}

const props = withDefaults(defineProps<IpropType>(), {
    block: false,
})
const $style = useCssModule()
const refInput = shallowRef()

const className = computed(() => ({
    [$style.input]: true,
    [$style.block]: props.block,
}))

const myWidth = computed(() => {
    return props.width || (props.block ? '100%' : '214px')
})

defineExpose({
    instance: () => refInput.value,
})
</script>

<style lang="scss" module>
div.input {
    width: unset;
    min-width: v-bind(myWidth);

    &.block {
        display: flex;
        width: v-bind(myWidth);
    }
}
</style>
