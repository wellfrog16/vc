<template>
    <span v-if="loading" v-loading="loading" :class="$style.loading" />
    <template v-else>
        <ElRadioGroup v-if="!props.multiple" v-model="myValue" v-bind="$attrs" :class="$style.radio">
            <ElRadioButton
                v-for="item in myOptions"
                :key="((item[myProps.key] || item[myProps.label]) as string | number)"
                :label="item[myProps.value]"
            >
                {{ item[myProps.label] }}
            </ElRadioButton>
        </ElRadioGroup>
        <ElCheckboxGroup v-else v-model="myValue" v-bind="$attrs">
            <ElCheckboxButton
                v-for="item in myOptions"
                :key="((item[myProps.key] || item[myProps.label]) as string | number)"
                :label="item[myProps.value]"
            >
                {{ item[myProps.label] }}
            </ElCheckboxButton>
        </ElCheckboxGroup>
    </template>
</template>

<script lang="ts" setup>
import { ElCheckboxButton, ElCheckboxGroup, ElRadioButton, ElRadioGroup, vLoading } from 'element-plus'
import useChoice, { preEmit, preProps } from './useChoice'

const props = defineProps(preProps)
const emits = defineEmits(preEmit)

const { loading, myOptions, myProps, myValue } = useChoice({ props, emits }, 'choice')
</script>

<style lang="scss" module>
.loading {
    display: inline-block;
    width: 100px;
}

.radio {
    display: inherit;
}
</style>
