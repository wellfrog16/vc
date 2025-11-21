<template>
    <Wrapper>
        <HChoiceBoolean v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import HChoiceBoolean from '../choice-boolean.vue'

const result = ref(false)
</script>
