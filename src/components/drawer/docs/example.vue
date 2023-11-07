<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HDrawer v-model="visible" title="测试">
                啤酒、饮料、矿泉水，花生、瓜子、大鸡腿
                <template #footer>
                    <HButton @click="() => toggleVisible()">关闭</HButton>
                </template>
            </HDrawer>
            <HButton @click="() => toggleVisible()">打开</HButton>
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem } from 'element-plus'
import { useToggle } from '@vueuse/core'
import Wrapper from '@/components/example-wrapper.vue'
import HButton from '@/components/button/index.vue'
import HDrawer from '../index.vue'

const visible = ref(false)
const toggleVisible = useToggle(visible)
</script>
