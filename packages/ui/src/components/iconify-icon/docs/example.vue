<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <div :class="$style.icons" :style="myStyle">
                <VcIconifyIcon name="mdi-light:bank" />
                <VcIconifyIcon name="mdi-light:face-mask" />
                <VcIconifyIcon name="ic:baseline-dining" />
                <VcIconifyIcon name="solar:accessibility-outline" />
                <VcIconifyIcon name="ri:briefcase-4-line" />
                <VcIconifyIcon name="svg-spinners:bars-scale-fade" />
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区">
            <div :style="myStyle">
                <span>图标和文字混排</span>
                <VcIconifyIcon name="ic:baseline-dining" />
                <span>看看对齐情况</span>
                <VcIconifyIcon name="solar:accessibility-outline" />
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
import VcIconifyIcon from '../iconify-icon.vue'

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
