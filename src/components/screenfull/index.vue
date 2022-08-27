<template>
    <span ref="elLoading" :class="$style.main" @click="handleClick">
        <slot>
            <HElIcon name="FullScreen" />
        </slot>
    </span>
</template>

<script lang="ts" setup>
import { nextTick, ref, shallowRef, watch } from 'vue'
import { ElLoading } from 'element-plus'
import { loader } from '@frog-res/h-utils'
import HElIcon from '@/components/el-icon/index.vue'

const elLoading = ref()
const loadingInstance = shallowRef()
const loading = ref(false)

const handleClick = async () => {
    loading.value = true
    const screenfull = (await loader.loadCdnSingle('screenfull'))
    loading.value = false

    screenfull.toggle()
}

watch(loading, value => {
    nextTick(() => {
        if (!elLoading.value) { return }
        if (value) {
            loadingInstance.value = ElLoading.service({ target: elLoading.value, fullscreen: false })
            return
        }
        loadingInstance.value.close()
    })
})
</script>

<style lang="scss" module>
.main {
    display: inline-flex;
    cursor: pointer;
}
</style>
