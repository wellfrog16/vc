<template>
    <ElDatePicker
        v-bind="$attrs"
        v-model="myValue"
        :disabled-date="disabledDate"
        type="daterange"
        :value-format="valueFormat"
        @change="handleChange"
    />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ElDatePicker } from 'element-plus'
import type { PropType } from 'vue'

const props = defineProps({
    modelValue: { type: Array as PropType<string[]>, default: () => [] },
    valueFormat: { type: String, default: 'YYYY-MM-DD' },
    limitDays: { type: Number, default: 3 }, // 限制天数
    includeToday: { type: Boolean, default: false }, // 是否包含当天
})

const emits = defineEmits(['update:modelValue', 'change'])

const disabledDate = (time: Date) => {
    const now = Date.now()
    const pickerTime = time.getTime()
    const dayTime = 3600 * 1000 * 24 // 一天的毫秒数
    const limitTime = dayTime * props.limitDays // 限制毫秒

    let todayTime = 0
    if (props.limitDays > 0) { // limitDays > 0 时，是否包含今天
        todayTime = props.includeToday ? dayTime : 0
    }
    else { // limitDays < 0 时，是否包含今天
        todayTime = props.includeToday ? 0 : dayTime
    }

    if (props.limitDays < 0) {
        return pickerTime + todayTime > now || pickerTime + todayTime < now + limitTime
    }
    return pickerTime + todayTime > now + limitTime || pickerTime + todayTime < now
}

const myValue = computed<any>({
    get: () => props.modelValue,
    set: val => {
        emits('update:modelValue', val)
    },
})

const handleChange = (val: string[] | Event) => {
    emits('change', val)
}
</script>
