<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <ElRow v-for="item in list" :key="item.id">
                <ElCol :span="6">
                    <HTextEllipsis placement="top-start" :max-width="maxWidth" effect="dark" :show-tooltip="showTooltip">{{ item.title }}</HTextEllipsis>
                </ElCol>
            </ElRow>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：最大宽度">
            <ElRow :gutter="20">
                <ElCol :span="24">
                    <ElSlider v-model="myWidth" :max="400" @change="(val: any) => handleChange(val)" />
                </ElCol>
                <ElCol :span="24">
                    <ElAlert title="当最大宽度为0时，则自动判断是否显示省略号" type="success" :closable="false" />
                </ElCol>
            </ElRow>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：显示Tooltip">
            <ElSwitch v-model="showTooltip" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { useDebounceFn } from '@vueuse/core'
import { ElAlert, ElCol, ElDescriptionsItem, ElRow, ElSlider, ElSwitch } from 'element-plus'
import { ref } from 'vue'
import Wrapper from '@/components/example-wrapper.vue'
import HTextEllipsis from '../text-ellipsis.vue'

const myWidth = ref(300)
const maxWidth = ref(300)
const showTooltip = ref(true)
const list = [
    { id: 0, title: '鼠标移动下方文本上查看效果' },
    { id: 1, title: '当未超过溢出宽度时，显示完整文案，鼠标hover无tooltip' },
    { id: 2, title: '当超过溢出宽度时，显示文案和省略号，鼠标hover显示tooltip' },
    { id: 3, title: '三口一只猪' },
    { id: 4, title: '不装了，我是亿万富翁我摊牌了' },
    { id: 5, title: '王总好' },
    { id: 6, title: '卧龙凤雏' },
    { id: 7, title: '本来打算以普通人的身份跟你们相处，可换来的却是疏远。' },
]

const handleChange = useDebounceFn((value: number) => {
    maxWidth.value = value
}, 500)
</script>
