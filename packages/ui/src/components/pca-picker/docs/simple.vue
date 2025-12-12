<template>
    <Wrapper>
        <HPCAPicker v-model="result" type="P" source="p" />
    </Wrapper>
</template>

<script lang="ts" setup>
import HPCAPicker from '../pca-picker.vue'

const result = ref<number>()
</script>
