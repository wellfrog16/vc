<template>
    <Wrapper>
        <VcDialog v-model="visible" title="测试">
            内容
        </VcDialog>
        <VcButton @click="() => toggleVisible()">打开</VcButton>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcButton from '../../button/button.vue'
import VcDialog from '../dialog.vue'

const [visible, toggleVisible] = useToggle()
</script>
