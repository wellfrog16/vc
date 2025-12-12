<template>
    <Wrapper>
        <HChoiceBoolean v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import HChoiceBoolean from '../choice-boolean.vue'

const result = ref(false)
</script>
