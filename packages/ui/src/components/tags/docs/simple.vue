<template>
    <Wrapper>
        <VcTags v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcTags from '../tags.vue'

const result = ref<string[]>(['小龙虾', '毛血旺', '剁椒鱼头', '冰激凌'])
</script>
