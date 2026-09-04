<template>
    <span>{{ formattedValue }}</span>
</template>

<script setup lang="ts">
import type { IThousandSeparatorProps } from './thousand-separator'
import { thousandSeparator } from '@wfrog/vc-utils'

const props = withDefaults(defineProps<IThousandSeparatorProps>(), {
    value: null,
    separator: ',',
    decimalPlaces: -1,
    placeholder: '-',
})

const formattedValue = computed(() => {
    if (props.value === null || props.value === undefined || props.value === '') {
        return props.placeholder
    }
    return thousandSeparator(props.value, {
        separator: props.separator,
        decimalPlaces: props.decimalPlaces,
    })
})
</script>
