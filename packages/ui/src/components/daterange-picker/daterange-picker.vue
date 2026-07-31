<template>
    <ElDatePicker v-model="myValue" :disabled-date="disabledDate" type="daterange" :value-format="valueFormat" />
</template>

<script lang="ts" setup>
import type { IDateRangePickerEmits, IDateRangePickerProps } from './daterange-picker'

const props = withDefaults(defineProps<IDateRangePickerProps>(), {
    valueFormat: 'YYYY-MM-DD',
    limitDays: 3,
    includeToday: false,
})

const emits = defineEmits<IDateRangePickerEmits>()

const myValue = useVModel(props, 'modelValue', emits)

function disabledDate(time: Date) {
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
</script>
