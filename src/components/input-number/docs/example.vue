<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HInputNumber v-model="result" :size="size" :controls="controls" :input-width="myWidth" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：文字组合">
            <HInputNumber v-model="result" :size="size" :controls="controls" :input-width="myWidth">
                <template #prepend>份数</template>
            </HInputNumber>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：Select 组合">
            <HInputNumber v-model="result" :size="size" :controls="controls" :input-width="myWidth">
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
        <ElDescriptionsItem label="参数：显示控制器">
            <HChoiceBoolean v-model="controls" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="宽度">
            <ElSlider v-model="width" :min="100" :max="250" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElDescriptionsItem, ElOption, ElSelect, ElSlider } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HChoice from '@/components/choice/index.vue'
import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import HInputNumber from '../index.vue'

const controls = ref(true)
const result = ref(1)
const select = ref('c')
const size = ref<any>('default')
const sizeData = ['large', 'default', 'small']
const width = ref(150)
const myWidth = computed(() => `${width.value}px`)
</script>
