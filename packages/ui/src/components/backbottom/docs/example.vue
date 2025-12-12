<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区1：页面">
            看右下角
            <VcBackbottom :bottom="bottom" :right="right" :visibility-height="visibilityHeight" />
        </ElDescriptionsItem>
        <ElDescriptionsItem>
            <template #label>展示区2：<br>普通 div</template>
            <div :class="$style['test-div']">
                <div v-for="i in 40" :key="i">{{ i }}</div>
                <VcBackbottom :bottom="bottom" :right="right" :visibility-height="visibilityHeight" parent />
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem>
            <template #label>展示区3：<br>使用 el-scrollbar</template>
            <ElScrollbar height="200px" always>
                <div v-for="i in 40" :key="i">{{ i }}</div>
                <VcBackbottom :bottom="bottom" :right="right" :visibility-height="visibilityHeight" parent />
            </ElScrollbar>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：底部距离">
            <ElInputNumber v-model="bottom" :min="0" :precision="0" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：右侧距离">
            <ElInputNumber v-model="right" :min="0" :precision="0" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：可见高度">
            <ElInputNumber v-model="visibilityHeight" :min="0" :precision="0" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcBackbottom from '../backbottom.vue'

const bottom = ref(40)
const right = ref(40)
const visibilityHeight = ref(200)
</script>

<style lang="scss" module>
.test-div {
    position: relative;
    overflow: auto;
    height: 200px;
}
</style>
