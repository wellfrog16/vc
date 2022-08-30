<template>
    <span v-loading="loading" :class="$style.main" @click="handleClick">
        <slot>
            <HElIcon name="FullScreen" />
        </slot>
    </span>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { vLoading } from 'element-plus'
import { loader } from '@frog-res/h-utils'
import HElIcon from '@/components/el-icon/index.vue'

const loading = ref(false)

const handleClick = async () => {
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
