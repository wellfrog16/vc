<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcConfigProvider iconfont-url="//at.alicdn.com/t/font_2923719_83xgwd9wy2l.js">
                <div :class="$style.icons" :style="myStyle">
                    <VcIcon name="fa-brands fa-bilibili" type="awesome" />
                    <VcIcon name="fa-solid fa-car-side" type="awesome" />
                    <VcIcon name="fa-solid fa-chart-line" type="awesome" />
                    <VcIcon name="fa-brands fa-github-alt" type="awesome" />
                    <VcIcon name="fa-regular fa-face-laugh-beam" type="awesome" />
                    <VcIcon name="fa-regular fa-id-card" type="awesome" />
                </div>
                <div :class="$style.icons" :style="myStyle">
                    <VcIcon name="Aim" type="el" />
                    <VcIcon name="Link" type="el" />
                    <VcIcon name="Edit" type="el" />
                    <VcIcon name="Message" type="el" />
                    <VcIcon name="ShoppingCart" type="el" />
                    <VcIcon name="MoonNight" type="el" />
                </div>
                <div :class="$style.icons" :style="myStyle">
                    <VcIcon name="music" type="svg" />
                    <VcIcon name="star" type="svg" />
                    <VcIcon name="dream" type="svg" />
                    <VcIcon name="component" type="svg" />
                    <VcIcon name="eleme" type="svg" />
                    <VcIcon name="business" type="svg" />
                </div>
            </VcConfigProvider>
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
import VcConfigProvider from '@/components/config-provider/config-provider.vue'
import VcIcon from '../icon.vue'

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
