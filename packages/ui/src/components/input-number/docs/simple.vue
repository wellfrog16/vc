<template>
    <Wrapper>
        <VcInputNumber v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcInputNumber from '../input-number.vue'

const result = ref(1)
</script>
