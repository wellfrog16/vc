<template>
    <VcConfigProvider iconfont-url="//at.alicdn.com/t/font_2923719_83xgwd9wy2l.js">
        <Wrapper>
            <ElDescriptionsItem label="展示区">
                <div :class="$style.icons" :style="myStyle">
                    <VcSVGIcon name="music" />
                    <VcSVGIcon name="star" />
                    <VcSVGIcon name="dream" />
                    <VcSVGIcon name="component" />
                    <VcSVGIcon name="eleme" />
                    <VcSVGIcon name="business" />
                </div>
            </ElDescriptionsItem>
            <ElDescriptionsItem label="展示区">
                <div :style="myStyle">
                    <span>图标和文字混排</span>
                    <VcSVGIcon name="star" />
                    <span>看看对齐情况</span>
                    <VcSVGIcon name="business" />
                </div>
            </ElDescriptionsItem>
            <ElDescriptionsItem label="大小控制">
                <ElSlider v-model="fontsize" :min="14" :max="30" />
            </ElDescriptionsItem>
            <ElDescriptionsItem label="颜色控制">
                <VcChoice v-model="myColor" :options="colors" />
            </ElDescriptionsItem>
            <ElDescriptionsItem label="展示区：插槽">
                <ElSpace direction="vertical" alignment="start" size="large">
                    <ElAlert title="自定义插槽的 path，与本身功能保持一致的样式。此时 name 参数无效，可以用来标识 svg 是什么图像，方便使用" type="info" :closable="false" />
                    <VcSVGIcon name="screenfull" viewBox="0 0 1024 1024">
                        <path d="M170.666667 170.666667v213.333333H85.333333V85.333333h298.666667v85.333334H170.666667z m682.666666 213.333333V170.666667h-213.333333V85.333333h298.666667v298.666667h-85.333334zM170.666667 640v213.333333h213.333333v85.333334H85.333333v-298.666667h85.333334z m682.666666 0h85.333334v298.666667h-298.666667v-85.333334h213.333333v-213.333333z" />
                    </VcSVGIcon>
                </ElSpace>
            </ElDescriptionsItem>
        </Wrapper>
    </VcConfigProvider>
</template>

<script lang="ts" setup>
import VcChoice from '@/components/choice/choice.vue'
import VcConfigProvider from '@/components/config-provider/config-provider.vue'
import VcSVGIcon from '../svg-icon.vue'

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

    > * + * {
        margin-left: 1em;
    }
}
</style>
