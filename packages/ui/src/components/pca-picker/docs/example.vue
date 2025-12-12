<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <!-- <VcConfigProvider pca-base-url="https://raw.githubusercontent.com/wellfrog16/area/refs/heads/master"> -->
            <VcConfigProvider pca-base-url="https://gitee.com/wellfrog16/area/raw/master" cros-proxy="https://api.allorigins.win/raw?url=">
                <VcPCAPicker
                    v-if="visible"
                    v-model="result"
                    :multiple="multiple"
                    :type="type"
                    :source="source"
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
            </VcConfigProvider>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：数据源">
            <ElSelect v-model="source" placeholder="请选择" @change="handleSourceChange">
                <ElOption v-for="item in sourceOption" :key="item.value" :label="item.label" :value="item.value" />
            </ElSelect>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="">
            <ElAlert :title="sourceExplain" type="warning" :closable="false" />
            <ElAlert title="不同数据源的作用是减少请求回来的数据量，完整的省市区全称+拼音，需要请求 66K 的数据，而如果只要单纯的省市，只需要请求 4.9K 的数据" type="info" :closable="false" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：选择类型">
            <VcChoice v-model="type" :options="typeOption" @change="handleTypeChange" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：热门省/市/区">
            <VcChoice v-model="hotIds" :options="hotIdsOption" multiple />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：名称类型">
            <VcChoice v-model="nameType" :options="nameTypeOption" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：单/多选">
            <VcChoice v-model="multiple" :options="multipleOption" @change="handleMultipleChange" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：可搜索">
            <VcChoiceBoolean v-model="filterable" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：历史选择">
            <ElSpace size="large">
                <VcChoiceBoolean v-model="history" />
                <ElText type="warning">*非级联选择生效</ElText>
            </ElSpace>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：高亮角标">
            <ElSpace size="large">
                <VcChoiceBoolean v-model="activeMark" />
                <ElText type="warning">*非级联选择生效</ElText>
            </ElSpace>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：热门和历史选择同步高亮">
            <ElSpace size="large">
                <VcChoiceBoolean v-model="syncActive" />
                <ElText type="warning">*非级联选择生效</ElText>
            </ElSpace>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：多选限制">
            <ElSpace size="large">
                <VcInputNumber v-model="limit" :min="3" :max="10" />
                <ElText type="warning">*非级联选择的多选生效</ElText>
            </ElSpace>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            {{ result }}
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import type { IChoiceProps } from '@/components/choice/choice'
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcChoice from '@/components/choice/choice.vue'
import VcConfigProvider from '@/components/config-provider/config-provider.vue'
import VcInputNumber from '@/components/input-number/input-number.vue'
import VcPCAPicker from '../pca-picker.vue'

const sourceExplain = '*不同数据源，提供的数据不同。所以像“省 + 拼音”的数据，是无法提供【省市】信息的展示，也无法显示数据的【全称】。同样，如果数据源没有选择【拼音】，那么搜索时也无法使用拼音搜索。'

const source = ref<any>('pca-py-fn')
const sourceOption: IChoiceProps['options'] = [
    { label: '省', value: 'p' },
    { label: '省 + 拼音', value: 'p-py' },
    { label: '省 + 全称+ 拼音', value: 'p-py-fn' },
    { label: '省市', value: 'pc' },
    { label: '省市 + 拼音', value: 'pc-py' },
    { label: '省市 + 全称 + 拼音', value: 'pc-py-fn' },
    { label: '省市区', value: 'pca' },
    { label: '省市区 + 拼音', value: 'pca-py' },
    { label: '省市区 + 全称 + 拼音', value: 'pca-py-fn' },
]

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
const typeOption: IChoiceProps['options'] = [
    { label: '省', value: 'P' },
    { label: '市', value: 'C' },
    { label: '省市(级联)', value: 'PC' },
    { label: '省市区(级联)', value: 'PCA' },
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
const multipleOption: IChoiceProps['options'] = [
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

function reload() {
    visible.value = false
    nextTick(() => {
        visible.value = true
    })
}

function handleChange(value: any) {
    console.log('@change', value)
}

function handleMultipleChange(value: string | number | boolean) {
    result.value = value ? [] : undefined
}

function handleLimit(value: number) {
    console.log('@limit', value)
}

const handleSourceChange = () => reload()

function handleTypeChange() {
    reload()
    result.value = undefined
    hotIds.value = hotData.find(item => item.type.includes(type.value))?.defaultId || []
}
</script>

<style lang="scss" module>
.button {
    margin-left: 8px;
}
</style>
