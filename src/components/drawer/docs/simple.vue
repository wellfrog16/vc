<template>
    <Wrapper>
        <HDrawer v-model="visible" title="测试">
            内容
        </HDrawer>
        <HButton @click="() => toggleVisible()">打开</HButton>
    </Wrapper>
</template>

<script lang="ts" setup>
import { useToggle } from '@vueuse/core'
import Wrapper from '@/components/simple-wrapper.vue'
import HDrawer from '../index.vue'

const [visible, toggleVisible] = useToggle()
</script>
