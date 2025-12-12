<template>
    <Wrapper>
        <VcThousandInput v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcThousandInput from '../thousand-input.vue'

const result = ref('')
</script>
