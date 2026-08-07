<template>
    <Wrapper>
        <VcTreeSelect v-model="result" :options="treeData" width="300px" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcTreeSelect from '../tree-select.vue'
import { treeData } from './data'

const result = ref<string>('')
</script>
