<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <div :class="$style.container">
                <VcScrollbar :view-margin="viewMargin" always>
                    <div v-for="i in 20" :key="i" :class="$style.item">{{ i }}</div>
                </VcScrollbar>
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区">
            <VcScrollbar height="120px" :fill-height="false" :view-margin="viewMargin">
                <div v-for="i in 20" :key="i" :class="$style.item">{{ i }}</div>
            </VcScrollbar>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：间隔">
            <ElSpace size="large">
                <VcChoice v-model="viewMargin" :options="options" />
                <ElText>注意垂直滚动条与内容区的位置变化</ElText>
            </ElSpace>
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChoice from '@/components/choice/choice.vue'
import VcScrollbar from '../scrollbar.vue'

const options = [
    { label: '0px', value: '0px' },
    { label: '0px 10px', value: '0px 10px' },
]

const viewMargin = ref('0px')
</script>

<style lang="scss" module>
.container {
    display: flex;
    height: 200px;
    flex-direction: column;
}

.item {
    border: 1px solid var(--el-border-color-light);
}
</style>
