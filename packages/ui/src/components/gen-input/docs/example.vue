<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcGenInput v-model="result" :disabled="disabled" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="禁用">
            <VcChoiceBoolean v-model="disabled" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcGenInput from '../gen-input.vue'

const result = ref('')
const disabled = ref(false)
</script>
