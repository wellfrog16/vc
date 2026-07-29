<template>
    <Wrapper>
        <VcGenInput v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcGenInput from '../gen-input.vue'

const result = ref('')
</script>
