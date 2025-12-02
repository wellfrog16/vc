<template>
    <ElInput ref="inputRef" :class="className">
        <!-- 这样没有类型提示 -->
        <!-- <template v-for="(_, name) in $slots" :key="name" #[name]>
            <slot :name="name" />
        </template> -->
        <template v-if="$slots.prefix" #prefix><slot name="prefix" /></template>
        <template v-if="$slots.suffix" #suffix><slot name="suffix" /></template>
        <template v-if="$slots.prepend" #prepend><slot name="prepend" /></template>
        <template v-if="$slots.append" #append><slot name="append" /></template>
    </ElInput>
</template>

<script lang="ts" setup>
import { ElInput } from 'element-plus'
import { computed, useCssModule, useTemplateRef } from 'vue'

interface IPropType {
    block?: boolean
    width?: string
}

const props = withDefaults(defineProps<IPropType>(), {
    block: false,
})
const $style = useCssModule()
const inputRef = useTemplateRef('inputRef')

const className = computed(() => ({
    [$style.input]: true,
    [$style.block]: props.block,
}))

const myWidth = computed(() => {
    return props.width || (props.block ? '100%' : '240px')
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
