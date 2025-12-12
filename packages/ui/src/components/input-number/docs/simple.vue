<template>
    <Wrapper>
        <HInputNumber v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import HInputNumber from '../input-number.vue'

const result = ref(1)
</script>
