<template>
    <Wrapper>
        <HTreePicker v-model="result" :options="treeData" width="300px" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import treeData from './data'
import HTreePicker from '../index.vue'

const result = ref<string>('')
</script>
