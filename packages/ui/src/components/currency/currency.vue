<template>
    <VcInputThousand v-model="myModelValue" :precision="myCurrencyInfo.option.precision" :disabled="disabled" @change="handleCodeChange">
        <template v-if="prefix" #prefix>
            <span>{{ myCurrencyInfo?.option.prefix }}</span>
        </template>
        <template v-if="prepend" #prepend>
            <ElSelect v-if="Array.isArray(currencyInfo)" v-model="myCode" :style="selectStyle" :disabled="disabled" @change="handleCodeChange">
                <template v-if="flag" #prefix>
                    <VcFlag v-if="myCurrencyInfo" :code="myCurrencyInfo?.flag" />
                </template>
                <ElOption v-for="item in currencyInfo" :key="item.code" :value="item.code">
                    <VcFlag v-if="flag" :code="item.flag" :class="$style.flag" />{{ item.code }}
                </ElOption>
            </ElSelect>
            <template v-else>
                <VcFlag v-if="flag" :code="currencyInfo!.flag" :class="$style.flag" />{{ currencyInfo!.code }}
            </template>
        </template>
        <template v-if="suffix" #suffix>
            <span>{{ myCode }}</span>
        </template>
    </VcInputThousand>
</template>

<script lang="ts" setup>
import type { ICurrencyCode, ICurrencyEmits, ICurrencyProps } from './currency'
import VcFlag from '../flag/flag.vue'
import VcInputThousand from '../input-thousand/input-thousand.vue'
import currency from './currency'

const props = withDefaults(defineProps<ICurrencyProps>(), {
    flag: false,
    prefix: true,
    suffix: false,
    prepend: true,
    disabled: undefined,
})

const emits = defineEmits<ICurrencyEmits>()

const myModelValue = useVModel(props, 'modelValue', emits)

const selectStyle = computed(() => ({ width: props.flag ? '7.5em' : '6em' }))
const myCode = ref<ICurrencyCode>()
const myCurrencyInfo = computed(() => currency.find(item => item.code === myCode.value)!)

const currencyInfo = computed(() => {
    if (Array.isArray(props.code)) {
        return currency.filter(item => props.code.includes(item.code))
    }
    return currency.find(item => item.code === props.code)
})

function handleCodeChange() {
    emits('change', myModelValue.value, myCode.value!)
}

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
