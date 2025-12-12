<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcDrawer v-model="visible" title="测试" :show-default-footer="showDefaultFooter" :box-padding="boxPadding">
                <div v-for="value in 80" :key="value">{{ value }}：啤酒、饮料、矿泉水，花生、瓜子、大鸡腿</div>
            </VcDrawer>
            <VcButton @click="() => toggleVisible()">打开</VcButton>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：默认 footer">
            <VcChoiceBoolean v-model="showDefaultFooter" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：内边距">
            <VcChoiceBoolean v-model="boxPadding" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="">
            滚动内容，注意上下边距的不同
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcButton from '@/components/button/button.vue'
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcDrawer from '../drawer.vue'

const [visible, toggleVisible] = useToggle()
const showDefaultFooter = ref(false)
const boxPadding = ref(true)
</script>
