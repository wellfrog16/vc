<template>
    <el-space size="large" alignment="center" fill :style="{ display: 'flex' }">
        <div>
            <vc-config-provider pca-base-url="https://gitee.com/wellfrog16/area/raw/master" cros-proxy="https://api.allorigins.win/raw?url=">
                <vc-pca-picker v-model="result" :type="type" source="pca-py-fn" filterable />
            </vc-config-provider>
        </div>
        <div>
            <vc-choice v-model="type" :options="typeOption" @change="handleTypeChange" />
        </div>
        <el-text>结果：<el-text type="primary">{{ result }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
import type { IChoiceProps } from '@wfrog/vc/es/components/choice/type'

const result = ref()
const visible = ref(true)

const type = ref<'P' | 'C' | 'PC' | 'PCA'>('P')
const typeOption: IChoiceProps['options'] = [
    { label: '省', value: 'P' },
    { label: '市', value: 'C' },
    { label: '省市(级联)', value: 'PC' },
    { label: '省市区(级联)', value: 'PCA' },
]

function reload() {
    visible.value = false
    nextTick(() => {
        visible.value = true
    })
}

function handleTypeChange() {
    reload()
    result.value = undefined
}
</script>
