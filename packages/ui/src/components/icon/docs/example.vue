<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <div :class="$style.icons" :style="myStyle">
                <HIcon name="fa-brands fa-bilibili" type="awesome" />
                <HIcon name="fa-solid fa-car-side" type="awesome" />
                <HIcon name="fa-solid fa-chart-line" type="awesome" />
                <HIcon name="fa-brands fa-github-alt" type="awesome" />
                <HIcon name="fa-regular fa-face-laugh-beam" type="awesome" />
                <HIcon name="fa-regular fa-id-card" type="awesome" />
            </div>
            <div :class="$style.icons" :style="myStyle">
                <HIcon name="Aim" type="el" />
                <HIcon name="Link" type="el" />
                <HIcon name="Edit" type="el" />
                <HIcon name="Message" type="el" />
                <HIcon name="ShoppingCart" type="el" />
                <HIcon name="MoonNight" type="el" />
            </div>
            <div :class="$style.icons" :style="myStyle">
                <HIcon name="music" type="svg" />
                <HIcon name="star" type="svg" />
                <HIcon name="dream" type="svg" />
                <HIcon name="component" type="svg" />
                <HIcon name="eleme" type="svg" />
                <HIcon name="business" type="svg" />
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="大小控制">
            <ElSlider v-model="fontsize" :min="14" :max="30" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="颜色控制">
            <HChoice v-model="myColor" :options="colors" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElDescriptionsItem, ElSlider } from 'element-plus'
import { computed, ref } from 'vue'
import HChoice from '@/components/choice/choice.vue'
import Wrapper from '@/components/example-wrapper.vue'
import useExample from '@/components/svg-icon/docs/useExample'
import HIcon from '../icon.vue'

useExample()
const fontsize = ref(18)
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

    & + .icons {
        margin-top: 12px;
    }

    > * + * {
        margin-left: 1em;
    }
}
</style>
