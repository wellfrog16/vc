<template>
    <Wrapper>
        <HPCAPicker v-model="result" type="P" source="p" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import HPCAPicker from '../index.vue'

const result = ref<number>()
</script>
