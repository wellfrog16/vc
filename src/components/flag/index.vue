<template>
    <span :class="className" />
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref } from 'vue'
import { vLoading } from 'element-plus'
import { loader } from '@wfrog/utils'
import { codeMapping } from './flags'
import type { PropType } from 'vue'
import type { Flag2Code, Flag3Code } from './flags'

const props = defineProps({
    code: { type: String as PropType<Flag2Code | Flag3Code>, required: true },
    squared: { type: Boolean, default: false },
})

const loading = ref(false)
const className = computed(() => {
    let myCode = props.code.toLocaleUpperCase()

    if (myCode.length === 3) {
        myCode = codeMapping[myCode as Flag3Code]
    }

    return {
        fi: true,
        fis: props.squared,
        [`fi-${myCode.toLocaleLowerCase()}`]: true,
    }
})

onBeforeMount(async () => {
    loading.value = true
    await loader.loadCdnSingle('flagIcons')
    loading.value = false
})
</script>

<style lang="scss" module>
.main {
    display: inline-flex;
    cursor: pointer;
}
</style>
