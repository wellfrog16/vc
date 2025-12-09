<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HEasyPagination v-model:current-page="p" :have-next="haveNext" @current-change="loadList" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElDescriptionsItem, ElNotification } from 'element-plus'
import { computed, ref } from 'vue'

import Wrapper from '@/components/example-wrapper.vue'
import HEasyPagination from '../easy-pagination.vue'

const p = ref(1)
const haveNext = computed(() => (p.value < 3))
function loadList(p: number) {
    ElNotification({ message: `触发@current-change，当前第${p}页` })
}
</script>
