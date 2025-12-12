<template>
    <!-- [$style.prepend]: prepend 可以使得 input 框左边的圆角在无 prepend 时保持正确  -->
    <VcThousandInput
        v-model="myValue"
        v-model:format-value="formatValue"
        :options="thousandOption"
        v-bind="$attrs"
        :class="{ [$style.append]: append, [$style.prepend]: prepend }"
        @change="handleChange"
    >
        <template v-if="prepend" #prepend>
            <ElSelect v-if="Array.isArray(currencyInfo)" v-model="myCode" :style="selectStyle" @change="handleCodeChange">
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
        <template v-if="append" #append>
            <span v-if="Array.isArray(currencyInfo)">{{ myCurrencyInfo!.code }}</span>
            <span v-else>{{ currencyInfo!.code }}</span>
        </template>
    </VcThousandInput>
</template>

<script lang="ts" setup>
import type { ICurrencyCode, ICurrencyProps } from './currency'
import VcFlag from '../flag/flag.vue'
import VcThousandInput from '../thousand-input/thousand-input.vue'
import currency from './currency'

const props = withDefaults(defineProps<ICurrencyProps>(), {
    flag: false,
    prefix: true,
    prepend: true,
    append: false,
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'change', value: [string, string, ICurrencyCode]): void
}>()

const myValue = useVModel(props, 'modelValue', emits)

const selectStyle = computed(() => ({ width: props.flag ? '7.5em' : '6em' }))

const formatValue = ref<string>('')
const myCode = ref<ICurrencyCode>()
const myCurrencyInfo = computed(() => currency.find(item => item.code === myCode.value)!)
const thousandOption = computed(() => ({
    ...myCurrencyInfo.value?.option,
    prefix: props.prefix ? myCurrencyInfo.value?.option.prefix : '',
    elInputIndex: Array.isArray(props.code) ? 1 : 0,
}))

const currencyInfo = computed(() => {
    if (Array.isArray(props.code)) {
        return currency.filter(item => props.code.includes(item.code))
    }
    return currency.find(item => item.code === props.code)
})

function handleChange(val: string[]) {
    emits('change', [...val, myCode.value] as [string, string, ICurrencyCode])
}

function handleCodeChange() {
    handleChange([myValue.value, formatValue.value])
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
.append {
    .el-input__wrapper {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
}

.flag {
    margin-right: 8px;
}
</style>
