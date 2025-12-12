<template>
    <Wrapper>
        <VcTreePicker v-model="result" :options="treeData" width="300px" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcTreePicker from '../tree-picker.vue'
import { treeData } from './data'

const result = ref<string>('')
</script>
