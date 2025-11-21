<template>
    <Wrapper>
        <HEasyPagination v-model:current-page="p" :have-next="haveNext" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import HEasyPagination from '../easy-pagination.vue'

const p = ref(1)
const haveNext = computed(() => (p.value < 3))
</script>
