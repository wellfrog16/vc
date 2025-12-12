<template>
    <Wrapper>
        <VcChoice v-model="result" :options="data" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChoice from '../choice.vue'

const data = ['小龙虾', '毛血旺', '剁椒鱼头', '冰激凌']
const result = ref('毛血旺')
</script>
