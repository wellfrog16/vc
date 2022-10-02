<template>
    <HThousandInput v-model="myValue" :option="thousandOption" v-bind="$attrs">
        <template v-if="Array.isArray(currencyInfo)" #prepend>
            <ElSelect v-if="Array.isArray(currencyInfo)" v-model="myCode" :style="selectStyle">
                <template v-if="flag" #prefix>
                    <HFlag v-if="myCurrencyInfo" :code="myCurrencyInfo?.flag" />
                </template>
                <ElOption v-for="item in currencyInfo" :key="item.code" :value="item.code">
                    <HFlag v-if="flag" :code="item.flag" :class="$style.flag" />{{ item.code }}
                </ElOption>
            </ElSelect>
        </template>
        <template v-else #prepend>
            <HFlag v-if="flag" :code="currencyInfo.flag" :class="$style.flag" />{{ currencyInfo.code }}
        </template>
    </HThousandInput>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref } from 'vue'
import { ElOption, ElSelect } from 'element-plus'
import HThousandInput from '@/components/thousand-input/index.vue'
import HFlag from '@/components/flag/index.vue'
import currency from './currency'
import type { ICurrencyCode } from './currency'
import type { PropType } from 'vue'

const props = defineProps({
    modelValue: { type: String, required: true },
    code: { type: [Array, String] as PropType<ICurrencyCode | ICurrencyCode[]>, required: true },
    flag: { type: Boolean, default: false },
})

const emits = defineEmits(['update:modelValue'])

const myValue = computed({
    get: () => props.modelValue,
    set: val => emits('update:modelValue', val),
})

const selectStyle = computed(() => ({ width: props.flag ? '105px' : '80px' }))

const myCode = ref<ICurrencyCode>()
const myCurrencyInfo = computed(() => currency.find(item => item.code === myCode.value))
const thousandOption = computed(() => ({
    ...myCurrencyInfo.value?.option,
    elInputIndex: Array.isArray(props.code) ? 1 : 0,
}))

const currencyInfo = computed(() => {
    if (Array.isArray(props.code)) {
        return currency.filter(item => props.code.includes(item.code))
    }
    return currency.find(item => item.code === props.code)
})

onBeforeMount(() => {
    if (Array.isArray(currencyInfo.value) && currencyInfo.value.length > 0) {
        myCode.value = currencyInfo.value[0].code
    }
    else if (!Array.isArray(currencyInfo.value)) {
        myCode.value = currencyInfo.value?.code
    }
})
</script>

<style lang="scss" module>
.flag {
    margin-right: 8px;
}
</style>
