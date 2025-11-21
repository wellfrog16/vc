<template>
    <span :class="className" />
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { IFlag2Code, IFlag3Code } from './flags'
import { loader } from '@wfrog/utils'
import { computed, onBeforeMount } from 'vue'
import { codeMapping } from './flags'

const props = defineProps({
    code: { type: String as PropType<IFlag2Code | IFlag3Code>, required: true },
    squared: { type: Boolean, default: false },
})

const className = computed(() => {
    let myCode = props.code.toLocaleUpperCase()

    if (myCode.length === 3) {
        myCode = codeMapping[myCode as IFlag3Code]
    }

    return {
        fi: true,
        fis: props.squared,
        [`fi-${myCode.toLocaleLowerCase()}`]: true,
    }
})

onBeforeMount(async () => {
    await loader.loadCdnSingle('flagIcons')
})
</script>

<style lang="scss" module>
.main {
    display: inline-flex;
    cursor: pointer;
}
</style>
