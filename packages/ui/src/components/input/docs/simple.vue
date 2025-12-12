<template>
    <Wrapper>
        <VcInput v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcInput from '../input.vue'

const result = ref('')
</script>
