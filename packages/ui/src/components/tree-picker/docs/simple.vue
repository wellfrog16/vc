<template>
    <Wrapper>
        <HTreePicker v-model="result" :options="treeData" width="300px" />
    </Wrapper>
</template>

<script lang="ts" setup>
import HTreePicker from '../tree-picker.vue'
import { treeData } from './data'

const result = ref<string>('')
</script>
