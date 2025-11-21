<template>
    <Wrapper>
        <HThousandInput v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import HThousandInput from '../thousand-input.vue'

const result = ref('')
</script>
