<template>
    <VcConfigProvider iconfont-url="//at.alicdn.com/t/font_2923719_83xgwd9wy2l.js">
        <Wrapper>
            <ElDescriptionsItem label="展示区">
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
                <div :class="$style.icons" :style="myStyle">
                    <VcIcon name="mdi-light:bank" type="iconify" />
                    <VcIcon name="mdi-light:face-mask" type="iconify" />
                    <VcIcon name="ic:baseline-dining" type="iconify" />
                    <VcIcon name="solar:accessibility-outline" type="iconify" />
                    <VcIcon name="ri:briefcase-4-line" type="iconify" />
                    <VcIcon name="svg-spinners:bars-scale-fade" type="iconify" />
                </div>
            </ElDescriptionsItem>
            <ElDescriptionsItem label="展示区">
                <div :style="myStyle">
                    <VcIcon name="fa-brands fa-github-alt" type="awesome" />
                    <span>图标和文字混排</span>
                    <VcIcon name="Message" type="el" />
                    <span>看看对齐情况</span>
                    <VcIcon name="eleme" type="svg" />
                    <VcIcon name="svg-spinners:bars-scale-fade" type="iconify" />
                    效果如何？
                </div>
            </ElDescriptionsItem>
            <ElDescriptionsItem label="大小控制">
                <ElSlider v-model="fontsize" :min="14" :max="30" />
            </ElDescriptionsItem>
            <ElDescriptionsItem label="颜色控制">
                <VcChoice v-model="myColor" :options="colors" />
            </ElDescriptionsItem>
        </Wrapper>
    </VcConfigProvider>
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
