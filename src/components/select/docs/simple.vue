<template>
    <Wrapper>
        <HSelect v-model="result" :options="data" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import HSelect from '../index.vue'

const data = ['小龙虾', '毛血旺', '剁椒鱼头', '冰激凌']
const result = ref('毛血旺')
</script>
