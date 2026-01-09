<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcDragVerify
                ref="dragVerifyRef"
                v-model:success="success"
                :imgs="verifyImgs"
                :type="type"
                :circle="circle"
                :refresh="showRefresh"
                :tips="showTips"
                @success="handleSuccess"
                @fail="handleFail"
            />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：类型">
            <VcChoice v-model="type" :options="types" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="文本参数" />
        <ElDescriptionsItem label="参数：圆角">
            <VcChoiceBoolean v-model="circle" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="图像参数" />
        <ElDescriptionsItem label="参数：刷新按钮">
            <VcChoiceBoolean v-model="showRefresh" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：提示信息">
            <VcChoiceBoolean v-model="showTips" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="重置">
            <VcButton @click="handleReset">重置验证</VcButton>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            {{ success }}
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import VcButton from '@/components/button/button.vue'
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcChoice from '@/components/choice/choice.vue'
import VcDragVerify from '../drag-verify.vue'

const dragVerifyRef = useTemplateRef('dragVerifyRef')

const types = ['text', 'image']
const success = ref(false)
const type = ref<'text' | 'image'>('text')
const circle = ref(false)
const showRefresh = ref(true)
const showTips = ref(true)
const verifyImgs = [
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
]

function handleSuccess() {
    ElMessage({ message: '验证成功', type: 'success' })
}

function handleFail() {
    ElMessage({ message: '验证失败', type: 'error' })
}

function handleReset() {
    dragVerifyRef.value?.reset()
}
</script>

<style lang="scss" module></style>
