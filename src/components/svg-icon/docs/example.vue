<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <div :class="$style.icons" :style="myStyle">
                <HSVGIcon name="music" />
                <HSVGIcon name="star" />
                <HSVGIcon name="dream" />
                <HSVGIcon name="component" />
                <HSVGIcon name="eleme" />
                <HSVGIcon name="business" />
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="大小控制">
            <ElSlider v-model="fontsize" :min="14" :max="30" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="颜色控制">
            <HChoice v-model="mycolor" :options="colors" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElDescriptionsItem, ElSlider } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HChoice from '@/components/choice/index.vue'
import HSVGIcon from '../index.vue'
import useExample from '../useExample'

useExample()
const fontsize = ref(18)
const colors = [
    { label: '粉红', value: 'deeppink' },
    { label: '黄绿', value: 'yellowgreen' },
    { label: '浅蓝', value: 'cornflowerblue' },
    { label: '银色', value: 'silver' },
    { label: '金色', value: 'gold' },
]
const mycolor = ref('deeppink')
const myStyle = computed(() => ({ color: mycolor.value, fontSize: `${fontsize.value}px` }))
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
