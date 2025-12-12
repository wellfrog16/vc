<template>
    <Wrapper>
        <VcPCAPicker v-model="result" type="P" source="p" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcPCAPicker from '../pca-picker.vue'

const result = ref<number>()
</script>
