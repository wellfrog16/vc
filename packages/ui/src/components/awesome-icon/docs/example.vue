<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <div :class="$style.icons" :style="myStyle">
                <VcAwesomeIcon name="fa-brands fa-bilibili" />
                <VcAwesomeIcon name="fa-solid fa-car-side" />
                <VcAwesomeIcon name="fa-solid fa-chart-line" />
                <VcAwesomeIcon name="fa-brands fa-github-alt" />
                <VcAwesomeIcon name="fa-regular fa-face-laugh-beam" />
                <VcAwesomeIcon name="fa-regular fa-id-card" />
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="大小控制">
            <ElSlider v-model="fontsize" :min="14" :max="30" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="颜色控制">
            <VcChoice v-model="myColor" :options="colors" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChoice from '@/components/choice/choice.vue'
import VcAwesomeIcon from '../awesome-icon.vue'

const fontsize = ref(20)
const colors = [
    { label: '粉红', value: 'deeppink' },
    { label: '黄绿', value: 'yellowgreen' },
    { label: '浅蓝', value: 'cornflowerblue' },
    { label: '银色', value: 'silver' },
    { label: '金色', value: 'gold' },
]
const myColor = ref('deeppink')
const myStyle = computed(() => ({ color: myColor.value, fontSize: `${fontsize.value}px` }))
</script>

<style lang="scss" module>
.icons {
    display: flex;
    align-items: center;

    > * + * {
        margin-left: 1em;
    }
}
</style>
