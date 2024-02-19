<template>
    <ElInput :class="className" />
</template>

<script lang="ts" setup>
import { computed, useCssModule } from 'vue'
import { ElInput } from 'element-plus'

interface IpropType {
    block?: boolean
    width?: string
}

const props = withDefaults(defineProps<IpropType>(), {
    block: false,
})
const $style = useCssModule()

const className = computed(() => ({
    [$style.input]: true,
    [$style.block]: props.block,
}))

const myWidth = computed(() => {
    return props.width || (props.block ? '100%' : '214px')
})
</script>

<style lang="scss" module>
.input {
    width: unset;
    min-width: v-bind(myWidth);

    &.block {
        display: flex;
        width: v-bind(myWidth);
    }
}
</style>
