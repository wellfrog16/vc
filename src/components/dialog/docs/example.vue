<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HDialog v-model="visible" title="测试" :show-fullscreen="showFullscreen">
                啤酒、饮料、矿泉水，花生、瓜子、大鸡腿
                <template #footer>
                    <HButton @click="() => toggleVisible()">关闭</HButton>
                </template>
            </HDialog>
            <HButton @click="() => toggleVisible()">打开</HButton>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：大小">
            <HChoiceBoolean v-model="showFullscreen" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem } from 'element-plus'
import { useToggle } from '@vueuse/core'
import Wrapper from '@/components/example-wrapper.vue'
import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import HButton from '@/components/button/index.vue'
import HDialog from '../index.vue'

const visible = ref(false)
const showFullscreen = ref(true)
const toggleVisible = useToggle(visible)
</script>
