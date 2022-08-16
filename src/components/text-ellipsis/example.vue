<template>
    <Wrapper>
        <ElDescriptionsItem label="展示">
            <ElRow v-for="item in list" :key="item.id">
                <ElCol :span="6">
                    <HTextEllipsis placement="top-start" :content="item.title" :max-width="maxWidth" :show-tooltip="showTooltip">{{ item.title }}</HTextEllipsis>
                </ElCol>
            </ElRow>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="最大宽度">
            <ElRow :gutter="20">
                <ElCol :span="24">
                    <ElSlider v-model="myWidth" :max="350" @change="(val: any) => handleChange(val)" />
                </ElCol>
                <ElCol :span="24">
                    <ElAlert title="当最大宽度为0时，则自动判断是否显示省略号" type="success" :closable="false" />
                </ElCol>
            </ElRow>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="显示Tooltip">
            <ElSwitch v-model="showTooltip" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { debounce } from 'lodash'
import { ElAlert, ElCol, ElDescriptionsItem, ElRow, ElSlider, ElSwitch } from 'element-plus'
import HTextEllipsis from './index.vue'
import Wrapper from '../example-wrapper.vue'

const myWidth = ref(0)
const maxWidth = ref(0)
const showTooltip = ref(true)
const list = [
    { id: 0, title: '鼠标移动下方文本上查看效果' },
    { id: 1, title: '三口一只猪' },
    // { id: 2, title: '本来打算以普通人的身份跟你们相处，可换来的却是疏远。' },
    { id: 3, title: '不装了，我是亿万富翁我摊牌了' },
    { id: 4, title: '王总好' },
    { id: 5, title: '卧龙凤雏' },
    { id: 6, title: '本来打算以普通人的身份跟你们相处，可换来的却是疏远。' },
]

const handleChange = debounce((value: number) => {
    maxWidth.value = value
}, 500)
</script>
