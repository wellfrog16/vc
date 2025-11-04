<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <!-- <HConfigProvider pca-base-url="https://raw.githubusercontent.com/wellfrog16/area/refs/heads/master"> -->
            <HConfigProvider pca-base-url="https://gitee.com/wellfrog16/area/raw/master" cros-proxy="https://api.allorigins.win/raw?url=">
                <HPCAPicker
                    v-if="visible"
                    v-model="result"
                    :multiple="multiple"
                    :type="type"
                    source="pca-py-fn"
                    clearable
                    placeholder="请选择"
                    :name-key="nameType"
                    :hot-ids="hotIds"
                    :history="history"
                    :filterable="filterable"
                    :active-mark="activeMark"
                    :sync-active="syncActive"
                    :limit="limit"
                    @change="handleChange"
                    @limit="handleLimit"
                />
            </HConfigProvider>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：选择类型">
            <HChoice v-model="type" :options="typeOption" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：热门省/市/区">
            <HChoice v-model="hotIds" :options="hotIdsOption" multiple />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：名称类型">
            <HChoice v-model="nameType" :options="nameTypeOption" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：单/多选">
            <HChoice v-model="multiple" :options="multipleOption" @change="handleMultipleChange" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：可搜索">
            <HChoiceBoolean v-model="filterable" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：历史选择">
            <ElSpace size="large">
                <HChoiceBoolean v-model="history" />
                <ElText type="warning">*非级联选择生效</ElText>
            </ElSpace>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：高亮角标">
            <ElSpace size="large">
                <HChoiceBoolean v-model="activeMark" />
                <ElText type="warning">*非级联选择生效</ElText>
            </ElSpace>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：热门和历史选择同步高亮">
            <ElSpace size="large">
                <HChoiceBoolean v-model="syncActive" />
                <ElText type="warning">*非级联选择生效</ElText>
            </ElSpace>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：多选限制">
            <ElSpace size="large">
                <HInputNumber v-model="limit" :min="3" :max="10" />
                <ElText type="warning">*非级联选择的多选生效</ElText>
            </ElSpace>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            {{ result }}
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import { ElDescriptionsItem, ElSpace, ElText } from 'element-plus'

import Wrapper from '@/components/example-wrapper.vue'
import HConfigProvider from '@/components/config-provider/index.vue'
import HChoice from '@/components/choice/index.vue'
import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import HInputNumber from '@/components/input-number/index.vue'
import HPCAPicker from '../index.vue'
import type { IChoiceOption } from '../../choice/useChoice'

const hotData = [
    {
        type: ['P'],
        defaultId: [11, 31],
        options: [
            { label: '北京', value: 11 },
            { label: '上海', value: 31 },
            { label: '四川', value: 51 },
            { label: '江苏', value: 32 },
        ],
    },
    {
        type: ['C'],
        defaultId: [1101, 3101],
        options: [
            { label: '北京市', value: 1101 },
            { label: '上海市', value: 3101 },
            { label: '长沙市', value: 4301 },
            { label: '无锡市', value: 3202 },
        ],
    },
    {
        type: ['PC'],
        defaultId: [],
        options: [],
    },
    {
        type: ['PCA'],
        defaultId: [],
        options: [],
    },
]

const type = ref<'P' | 'C' | 'PC' | 'PCA'>('P')
const typeOption: IChoiceOption = [
    { label: '省', value: 'P' },
    { label: '市', value: 'C' },
    { label: '省市', value: 'PC' },
    { label: '省市区', value: 'PCA' },
]

const nameType = ref<'fn' | 'n'>('fn')
const nameTypeOption = [
    { label: '全称', value: 'fn' },
    { label: '简称', value: 'n' },
]

const hotIds = ref<number[]>(hotData.find(item => item.type.includes(type.value))?.defaultId || [])
const hotIdsOption = computed(() => {
    return hotData.find(item => item.type.includes(type.value))?.options || []
})

const multiple = ref(false) // 单/多选
const multipleOption: IChoiceOption = [
    { label: '单选', value: false },
    { label: '多选', value: true },
]

const result = ref<number | number[]>()
const history = ref(false) // 历史选择
const activeMark = ref(true) // 角标
const syncActive = ref(false) // 同步高亮
const filterable = ref(true) // 可搜索
const visible = ref(true)

const limit = ref<number>(3)

const reload = () => {
    visible.value = false
    nextTick(() => {
        visible.value = true
    })
}

const handleChange = (value: any) => {
    console.log('@change', value)
}

const handleMultipleChange = (value: string | number | boolean) => {
    result.value = value ? [] : undefined
}

const handleLimit = (value: number) => {
    console.log('@limit', value)
}

watch(type, () => {
    reload()
    result.value = undefined
    hotIds.value = hotData.find(item => item.type.includes(type.value))?.defaultId || []
})
</script>

<style lang="scss" module>
.button {
    margin-left: 8px;
}
</style>
