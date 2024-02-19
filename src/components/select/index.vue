<template>
    <ElSelect v-model="myValue" :multiple="multiple" collapse-tags :loading="loading" v-bind="{ ...$attrs }" :class="className">
        <ElOption
            v-for="(item, index) in myOptions"
            :key="((item[myProps.key] || item[myProps.label]) as string | number)"
            :label="(item[myProps.label] as string | number)"
            :value="item[myProps.value] || index"
        />
    </ElSelect>
</template>

<script lang="ts" setup>
import { computed, useCssModule } from 'vue'
import { ElOption, ElSelect } from 'element-plus'
import useChoice, { preEmit, preProps } from '../choice/useChoice'

const props = defineProps({
    ...preProps,
    block: { type: Boolean, default: false },
    width: { type: String },
})
const emits = defineEmits(preEmit)

const { loading, myOptions, myProps, myValue } = useChoice({ props, emits }, 'async-picker')

const $style = useCssModule()
const className = computed(() => ({
    [$style.select]: true,
    [$style.block]: props.block,
}))

const myWidth = computed(() => {
    return props.width || (props.block ? '100%' : '214px')
})
</script>

<style lang="scss" module>
.select {
    width: unset;
    min-width: v-bind(myWidth);

    &.block {
        display: block;
        width: v-bind(myWidth);
    }
}
</style>
