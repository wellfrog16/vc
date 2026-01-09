<template>
    <Text v-if="type === 'text'" v-bind="props" ref="textRef" v-model:success="mySuccess" />
    <Image v-if="type === 'image'" v-bind="props" ref="imageRef" v-model:success="mySuccess" />
</template>

<script setup lang="ts">
import type { IDragVerifyProps } from './drag-verify'
import { useVModel } from '@vueuse/core'
import Image from './components/image.vue'
import Text from './components/text.vue'

const props = withDefaults(defineProps<IDragVerifyProps>(), {
    diffWidth: 20,
    imgs: () => [],
    type: 'text',
    width: 300,
    height: 40,
    background: () => ['#f5f5f5', '#d9d9d9', '#76c61d'],
    circle: false,
    radius: 4,
    text: '拖动滑块完成验证',
    successText: '验证成功',
    textColor: '#333',
    stopToCheck: false,
    successTips: '验证通过，超过89.7%用户',
    failedTips: '验证未通过，拖动滑块将悬浮图像正确合并',
    refresh: true,
    tips: true,
})
// const emits = defineEmits<{
//     (e: 'click', event: Event): void
// }>()

const mySuccess = useVModel(props, 'success')
const textRef = useTemplateRef('textRef')
const imageRef = useTemplateRef('imageRef')

defineExpose({
    reset: () => {
        textRef.value?.reset()
        imageRef.value?.reset()
    },
})
</script>

<style lang="scss" module>
.wrapper {
    line-height: 1;
}
</style>
