<template>
    <Wrapper>
        <VcChoiceBoolean v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChoiceBoolean from '../choice-boolean.vue'

const result = ref(false)
</script>
