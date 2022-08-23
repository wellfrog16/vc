<template>
    <span v-if="loading" ref="elLoading" :class="$style.loading" />
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
import { nextTick, ref, shallowRef, watch } from 'vue'
import { ElCheckboxButton, ElCheckboxGroup, ElLoading, ElRadioButton, ElRadioGroup } from 'element-plus'
import useChoice, { preEmit, preProps } from './useChoice'

const props = defineProps(preProps)
const emits = defineEmits(preEmit)

const elLoading = ref()
const loadingInstance = shallowRef()

const { loading, myOptions, myProps, myValue } = useChoice({ props, emits }, 'choice')

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
.loading {
    display: inline-block;
    width: 100px;
}

.radio {
    display: inherit;
}
</style>
