<template>
    <Wrapper>
        <VcDragVerify v-model:success="success" type="text" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcDragVerify from '../drag-verify.vue'

const success = ref(false)
</script>
