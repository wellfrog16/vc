<template>
    <Wrapper>
        <HDrawer v-model="visible" title="测试">
            内容
        </HDrawer>
        <HButton @click="() => toggleVisible()">打开</HButton>
    </Wrapper>
</template>

<script lang="ts" setup>
import HButton from '@/components/button/button.vue'
import HDrawer from '../drawer.vue'

const [visible, toggleVisible] = useToggle()
</script>
