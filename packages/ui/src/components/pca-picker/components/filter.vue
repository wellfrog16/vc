<template>
    <div class="vc-pca-wrapper">
        <ElDivider content-position="center">
            <ElText>搜索 </ElText>
            <ElText type="primary">{{ keyword || lastKeyword }}</ElText>
        </ElDivider>
        <ElRow :gutter="8" class="vc-pca-container">
            <ElCol v-for="item in filterData" :key="item.id" :span="4">
                <div :class="itemClass(item)" @click="clickItem(item)">
                    {{ item[nameKey!] }}
                </div>
            </ElCol>
        </ElRow>
    </div>
</template>

<script setup lang="ts">
import { injectCommonState } from '../pca-picker'

const { props: commonProps, filterData, itemClass, clickItem, keyword, lastKeyword, updatePopper } = injectCommonState()
const { nameKey } = toRefs(commonProps)

onMounted(() => updatePopper())
</script>
