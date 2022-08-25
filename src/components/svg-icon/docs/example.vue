<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <div :class="$style.icons">
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
        <!-- <ElDescriptionsItem label="颜色控制">
            <HChoiceBoolean v-model="box" />
        </ElDescriptionsItem> -->
    </Wrapper>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref } from 'vue'
import { ElDescriptionsItem, ElSlider } from 'element-plus'
import { loader } from '@frog-res/h-utils'
import Wrapper from '@/components/example-wrapper.vue'
import HChoice from '@/components/choice/index.vue'
// import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import HSVGIcon from '../index.vue'

const fontsize = ref(18)
const iconsize = computed(() => `${fontsize.value}px`)
const colors = [
    { label: '粉红', value: 'deeppink' },
    { label: '黄绿', value: 'yellowgreen' },
    { label: '浅蓝', value: 'cornflowerblue' },
    { label: '银色', value: 'silver' },
    { label: '金色', value: 'gold' },
]
const mycolor = ref('deeppink')
// const box = ref(false)

const loaderResource = async () => {
    await loader.loadScriptSingle('//at.alicdn.com/t/font_2923719_83xgwd9wy2l.js')
}

onBeforeMount(() => loaderResource())
</script>

<style lang="scss" module>
.icons {
    font-size: v-bind(iconsize);
    color: v-bind(mycolor);

    > * + * {
        margin-left: 1em;
    }
}
</style>
