<template>
    <Wrapper>
        <VcTinymce v-model="result" config="mini" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcTinymce from '../tinymce.vue'

const result = ref('Tinymce')
</script>
