<template>
    <span v-loading="loading" :class="$style.main" @click="handleClick">
        <slot>
            <HElIcon name="FullScreen" />
        </slot>
    </span>
</template>

<script lang="ts" setup>
import { loader } from '@wfrog/utils'
import { vLoading } from 'element-plus'
import { ref } from 'vue'

import HElIcon from '../el-icon/el-icon.vue'

const loading = ref(false)

async function handleClick() {
    loading.value = true
    const screenfull = (await loader.loadCdnSingle('screenfull'))
    loading.value = false

    screenfull.toggle()
}
</script>

<style lang="scss" module>
.main {
    display: inline-flex;
    cursor: pointer;
}
</style>
