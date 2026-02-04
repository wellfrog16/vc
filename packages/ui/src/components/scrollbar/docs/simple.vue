<template>
    <Wrapper>
        <div :class="$style.container">
            <VcScrollbar flex>
                <div v-for="i in 20" :key="i">{{ i }}</div>
            </VcScrollbar>
        </div>
        <VcScrollbar flex height="120px">
            <div v-for="i in 20" :key="i">{{ i }}</div>
        </VcScrollbar>
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
