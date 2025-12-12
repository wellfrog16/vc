<template>
    <Wrapper>
        <VcEasyPagination v-model:current-page="p" :have-next="haveNext" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcEasyPagination from '../easy-pagination.vue'

const p = ref(1)
const haveNext = computed(() => (p.value < 3))
</script>
