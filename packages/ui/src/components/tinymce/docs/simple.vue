<template>
    <Wrapper>
        <HTinymce v-model="result" config="mini" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import HTinymce from '../tinymce.vue'

const result = ref('Tinymce')
</script>
