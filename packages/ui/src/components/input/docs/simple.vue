<template>
    <Wrapper>
        <HInput v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import HInput from '../input.vue'

const result = ref('')
</script>
