<template>
    <span :class="className" :style="{ fontSize: mySize }" />
</template>

<script lang="ts" setup>
import type { IFlag3Code, IFlagProps } from './flags'
import { loader } from '@wfrog/utils'
import { codeMapping } from './flags'

const props = withDefaults(defineProps<IFlagProps>(), {
    squared: false,
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

const mySize = computed(() => {
    if (props.size && Number.isNaN(+props.size)) { return props.size }
    return `${props.size}px`
})

onBeforeMount(async () => {
    await loader.loadCdnSingle('flagIcons')
})
</script>
