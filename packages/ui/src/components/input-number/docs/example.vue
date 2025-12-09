<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HInputNumber v-model="result" :size="size" :controls="controls" :input-width="myWidth" :precision="precision" :step="step">
                <template #prefix>
                    <span>￥</span>
                </template>
                <template #suffix>
                    <span>RMB</span>
                </template>
            </HInputNumber>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：文字组合">
            <HInputNumber v-model="result" :size="size" :controls="controls" :input-width="myWidth" :precision="precision" :step-strictly="false">
                <template #prepend>份数</template>
            </HInputNumber>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：组合">
            <HInputNumber v-model="result" :size="size" :controls="controls" :input-width="myWidth" :precision="precision" :step="step">
                <template #prepend>
                    <ElSelect v-model="select" placeholder="请选择" style="width: 110px;" :size="size">
                        <ElOption label="西瓜" value="a" />
                        <ElOption label="香蕉" value="b" />
                        <ElOption label="哈密瓜" value="c" />
                    </ElSelect>
                </template>
            </HInputNumber>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：大小">
            <HChoice v-model="size" :options="sizeData" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：大小">
            <HInputNumber v-model="precision" :min="0" :max="2">
                <template #prepend>精度</template>
            </HInputNumber>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：显示控制器">
            <HChoiceBoolean v-model="controls" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="宽度">
            <ElSlider v-model="width" :min="50" :max="200" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            {{ result }}
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElDescriptionsItem, ElOption, ElSelect, ElSlider } from 'element-plus'
import { computed, ref } from 'vue'

import HChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import HChoice from '@/components/choice/choice.vue'
import Wrapper from '@/components/example-wrapper.vue'
import HInputNumber from '../input-number.vue'

const controls = ref(true)
const result = ref(1)
const select = ref('c')
const precision = ref(0)
const size = ref<any>('default')
const sizeData = ['large', 'default', 'small']
const width = ref(150)
const myWidth = computed(() => `${width.value}px`)
const step = computed(() => 1 / (10 ** precision.value))
</script>
