<template>
    <Wrapper>
        <HThousandInput v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import HThousandInput from '../thousand-input.vue'

const result = ref('')
</script>
