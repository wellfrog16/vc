<template>
    <Wrapper>
        <ElDescriptionsItem label="按钮">
            <VcButton>按钮</VcButton>
            <VcButton type="primary">按钮</VcButton>
            <VcButton type="success">按钮</VcButton>
            <VcButton type="warning">按钮</VcButton>
            <VcButton type="danger">按钮</VcButton>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：逻辑控制">
            <VcChoiceBoolean v-model="flag" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区">
            <VcColorSwitcher />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcButton from '@/components/button/button.vue'
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcColorSwitcher from '../color-switcher.vue'

const flag = ref(false)
</script>
