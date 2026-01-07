<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcDragVerify ref="dragVerifyRef" type="text" :circle="circle" @success="handleSuccess" @fail="handleFail" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：圆形">
            <VcChoiceBoolean v-model="circle" />
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
// import VcChoice from '@/components/choice/choice.vue'
import VcDragVerify from '../drag-verify.vue'

const dragVerifyRef = useTemplateRef('dragVerifyRef')

const success = ref(false)
const circle = ref(false)

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
