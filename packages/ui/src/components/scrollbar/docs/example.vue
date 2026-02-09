<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <div :class="$style.container">
                <VcScrollbar flex>
                    <div v-for="i in 20" :key="i">{{ i }}</div>
                </VcScrollbar>
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区">
            <VcScrollbar flex height="120px" :fill-height="false">
                <div v-for="i in 20" :key="i">{{ i }}</div>
            </VcScrollbar>
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcScrollbar from '../scrollbar.vue'
</script>

<style lang="scss" module>
.container {
    display: flex;
    height: 200px;
    flex-direction: column;
}
</style>
