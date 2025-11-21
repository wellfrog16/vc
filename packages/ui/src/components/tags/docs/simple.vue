<template>
    <Wrapper>
        <HTags v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import HTags from '../tags.vue'

const result = ref<string[]>(['小龙虾', '毛血旺', '剁椒鱼头', '冰激凌'])
</script>
