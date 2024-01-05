<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HDrawer v-model="visible" title="测试" :show-default-footer="showDefaultFooter">
                啤酒、饮料、矿泉水，花生、瓜子、大鸡腿
            </HDrawer>
            <HButton @click="() => toggleVisible()">打开</HButton>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：默认 footer">
            <HChoiceBoolean v-model="showDefaultFooter" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem } from 'element-plus'
import { useToggle } from '@vueuse/core'

import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import Wrapper from '@/components/example-wrapper.vue'
import HButton from '@/components/button/index.vue'
import HDrawer from '../index.vue'

const [visible, toggleVisible] = useToggle()
const showDefaultFooter = ref(false)
</script>
