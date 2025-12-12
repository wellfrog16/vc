<template>
    <ElDivider v-if="hasHot" content-position="left">{{ commonProps.hotText }}</ElDivider>
    <ElRow v-if="hasHot" :gutter="8" class="vc-pca-container">
        <ElCol v-for="item in hotData" :key="item.id" :span="4">
            <div :class="itemClass(item, true)" @click="clickItem(item)">
                {{ item[commonProps.nameKey!] }}
            </div>
        </ElCol>
    </ElRow>
</template>

<script setup lang="ts">
import { injectCommonState } from '../pca-picker'

const { props: commonProps, itemClass, hasHot, hotData, clickItem } = injectCommonState()
</script>
