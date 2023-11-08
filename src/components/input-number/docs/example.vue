<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HInputNumber v-model="result" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：文字组合">
            <HInputNumber v-model="result">
                <template #prepend>份数</template>
            </HInputNumber>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：Select 组合">
            <HInputNumber v-model="result">
                <template #prepend>
                    <ElSelect v-model="select" placeholder="请选择" style="width: 90px;">
                        <ElOption label="西瓜" value="a" />
                        <ElOption label="香蕉" value="b" />
                        <ElOption label="哈密瓜" value="c" />
                    </ElSelect>
                </template>
            </HInputNumber>
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem, ElOption, ElSelect } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HInputNumber from '../index.vue'

const result = ref(1)
const select = ref('c')
</script>
