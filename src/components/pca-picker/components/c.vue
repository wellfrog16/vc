<template>
    <div ref="wrapperRef" class="pca-wrapper">
        <div :class="$style.elevator">
            <ElAnchor ref="anchorRef" select-scroll-top :container="wrapperRef" :bound="40">
                <ElAnchorLink v-if="history && historyData.length" :href="`#${historyText}`">历史</ElAnchorLink>
                <ElAnchorLink v-if="hasHot" :href="`#${hotText}`">{{ hotText }}</ElAnchorLink>
                <ElAnchorLink v-for="group in fpyGroupData" :key="group.label" :href="`#${group.label}`">{{ group.label }}</ElAnchorLink>
            </ElAnchor>
        </div>
        <!-- 历史记录 -->
        <div v-if="history && historyData.length">
            <ElevatorItem :label="historyText!" :data="historyData" />
        </div>
        <!-- 热门 -->
        <div v-if="hasHot">
            <ElevatorItem :label="hotText!" :data="hotData" />
        </div>
        <div v-for="group in fpyGroupData" :key="group.label">
            <ElevatorItem :label="group.label" :data="group.childs" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { toRefs, useTemplateRef, watch } from 'vue'
import { ElAnchor, ElAnchorLink } from 'element-plus'

import ElevatorItem from './elevator-item.vue'
import { injectCommonState } from '../source'
import type { IPCAData } from '../source'

const { props: commonProps, fpyGroupData, flatData, popoverVisible, hasHot, hotData, historyData } = injectCommonState()
const { history, historyText, hotText } = toRefs(commonProps)

// any 避免类型在打包时报错
const wrapperRef = useTemplateRef<any>('wrapperRef')
const anchorRef = useTemplateRef<any>('anchorRef')

watch(fpyGroupData, () => {
    const tagsA = wrapperRef.value?.getElementsByTagName('a')
    if (!tagsA) { return }
    const firstHref = tagsA[0].hash
    // 遍历tagsA，设置href属性为空
    for (let i = 0; i < tagsA.length; i++) {
        tagsA[i].setAttribute('href', 'javascript:void(0)')
    }
    anchorRef.value?.scrollTo(firstHref)
})

// 定位选择的元素
watch(popoverVisible, () => {
    if (!popoverVisible.value) { return }
    if (!commonProps.modelValue || (Array.isArray(commonProps.modelValue) && commonProps.modelValue.length === 0)) { return }

    let firstItem: IPCAData | undefined
    if (commonProps.multiple && Array.isArray(commonProps.modelValue)) {
        firstItem = flatData.value.find(item => (commonProps.modelValue as number[])!.includes(item.id))
    }
    else {
        firstItem = flatData.value.find(item => item.id === commonProps.modelValue)
    }
    if (firstItem) {
        setTimeout(() => anchorRef.value?.scrollTo(`#${firstItem?.fpy}`), 0)
    }
})
</script>

<style lang="scss" module>
.elevator {
    --el-anchor-line-height: 12px !important;

    position: absolute;
    top: 32px;
    left: -40px;
    width: 38px;
    padding: 8px 0;
    background-color: var(--el-color-white);
    border-radius: var(--el-popover-border-radius);
    box-shadow: var(--el-box-shadow-light);

    :global {
        .el-anchor__link {
            padding: 2px 0;
            line-height: 12px;
            text-align: center;
        }

        .el-anchor__list {
            padding-left: 0 !important;
        }
    }
}
</style>
