<template>
    <Wrapper>
        <VcDrawer v-model="visible" title="测试">
            内容
        </VcDrawer>
        <VcButton @click="() => toggleVisible()">打开</VcButton>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcButton from '@/components/button/button.vue'
import VcDrawer from '../drawer.vue'

const [visible, toggleVisible] = useToggle()
</script>
