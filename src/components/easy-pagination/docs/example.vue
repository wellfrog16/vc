<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HEasyPagination v-model:current-page="p" :have-next="haveNext" @current-change="loadList" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElDescriptionsItem, ElNotification } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HEasyPagination from '../index.vue'

const p = ref(1)
const haveNext = computed(() => (p.value < 3))
const loadList = (p: number) => {
    ElNotification({ message: `触发@current-change，当前第${p}页` })
}
</script>

