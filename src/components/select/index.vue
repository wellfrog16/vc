<template>
    <ElSelect v-model="myValue" :multiple="multiple" collapse-tags :loading="loading" v-bind="{ ...$attrs }">
        <ElOption
            v-for="(item, index) in myOptions"
            :key="((item[myProps.key] || item[myProps.label]) as string | number)"
            :label="(item[myProps.label] as string | number)"
            :value="item[myProps.value] || index"
        />
    </ElSelect>
</template>

<script lang="ts" setup>
import { ElOption, ElSelect } from 'element-plus'
import useChoice, { preEmit, preProps } from '../choice/useChoice'

const props = defineProps(preProps)
const emits = defineEmits(preEmit)

const { loading, myOptions, myProps, myValue } = useChoice({ props, emits }, 'async-picker')
</script>
