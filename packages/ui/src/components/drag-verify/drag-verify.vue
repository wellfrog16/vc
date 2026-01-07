<template>
    <Text v-bind="props" ref="textRef" v-model:success="mySuccess" />
</template>

<script setup lang="ts">
import type { IDragVerifyProps } from './drag-verify'
import { useVModel } from '@vueuse/core'
import Text from './components/text.vue'

const props = withDefaults(defineProps<IDragVerifyProps>(), {
    type: 'text',
    width: 300,
    height: 40,
    background: () => ['#f5f5f5', '#d9d9d9', '#76c61d'],
    circle: false,
    radius: 4,
    text: '拖动滑块完成验证',
    successText: '验证成功',
    textColor: '#333',
})
// const emits = defineEmits<{
//     (e: 'click', event: Event): void
// }>()

const mySuccess = useVModel(props, 'success')
const textRef = useTemplateRef('textRef')

defineExpose({ reset: () => textRef.value?.reset() })
</script>

<style lang="scss" module>
.wrapper {
    line-height: 1;
}
</style>
