<template>
    <Wrapper>
        <HPCAPicker v-model="result" :options="data" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import HPCAPicker from '../index.vue'

const data = ['小龙虾', '毛血旺', '剁椒鱼头', '冰激凌']
const result = ref('毛血旺')

console.log('simple,  1111111111')
</script>
