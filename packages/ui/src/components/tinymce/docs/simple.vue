<template>
    <Wrapper>
        <HTinymce v-model="result" config="mini" />
    </Wrapper>
</template>

<script lang="ts" setup>
import HTinymce from '../tinymce.vue'

const result = ref('Tinymce')
</script>
