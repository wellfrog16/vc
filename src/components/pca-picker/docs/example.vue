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
                    source="pc-py-fn"
                    clearable
                    placeholder="请选择"
                    :hot-ids="hotIds"
                    :history="history"
                    :filterable="filterable"
                    :active-mark="activeMark"
                    :sync-active="syncActive"
                    :limit="limit"
                    @change="handleChange"
                />
            </HConfigProvider>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：选择类型">
            <HChoice v-model="type" :options="typeOption" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：热门省/市/区">
            <HChoice v-model="hotIds" :options="hotIdsOption" multiple />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：单/多选">
            <ElSwitch
                v-model="multiple"
                active-text="多选"
                inactive-text="单选"
                :active-value="true"
                :inactive-value="false"
                @change="handleMutipleChange"
            />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：可搜索">
            <HChoiceBoolean v-model="filterable" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：历史选择">
            <HChoiceBoolean v-model="history" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：高亮角标">
            <HChoiceBoolean v-model="activeMark" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：热门和历史选择同步高亮">
            <HChoiceBoolean v-model="syncActive" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：多选限制">
            <HInputNumber v-model="limit" :min="3" :max="10" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            {{ result }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="@change">{{ changeValue }}</ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { nextTick, ref, watch } from 'vue'
import { ElButton, ElDescriptionsItem, ElSwitch } from 'element-plus'

import Wrapper from '@/components/example-wrapper.vue'
import HConfigProvider from '@/components/config-provider/index.vue'
import HChoice from '@/components/choice/index.vue'
import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import HInputNumber from '@/components/input-number/index.vue'
import HPCAPicker from '../index.vue'
import type { IChoiceOption } from '../../choice/useChoice'

const hotIds = ref<number[]>([11, 31])
const hotIdsOption: IChoiceOption = [
    { label: '北京', value: 11 },
    { label: '上海', value: 31 },
    { label: '四川', value: 51 },
    { label: '江苏', value: 32 },
]

const type = ref<'P' | 'C' | 'A'>('C')
const typeOption: IChoiceOption = [
    { label: '省', value: 'P' },
    { label: '市', value: 'C' },
    { label: '区', value: 'A' },
]

const result = ref<number | number[]>()
const changeValue = ref<unknown>()
const multiple = ref(false) // 单/多选
const history = ref(false) // 历史选择
const activeMark = ref(true) // 角标
const syncActive = ref(false) // 同步高亮
const filterable = ref(true) // 可搜索
const visible = ref(true)

const limit = ref<number>(3)
// const visible = ref(true)

const reload = () => {
    visible.value = false
    nextTick(() => {
        visible.value = true
    })
}

const handleChange = (value: any) => {
    changeValue.value = value
}

const handleMutipleChange = (value: string | number | boolean) => {
    result.value = value ? [] : undefined
}

watch(type, () => {
    reload()
    result.value = undefined
})
</script>

<style lang="scss" module>
.button {
    margin-left: 8px;
}
</style>
