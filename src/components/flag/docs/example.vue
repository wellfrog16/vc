<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <div :class="$style.flags" :style="myStyle">
                <HFlag code="RUS" :squared="squared" />
                <HFlag code="SPM" :squared="squared" />
                <HFlag code="SGP" :squared="squared" />
                <HFlag code="BA" :squared="squared" />
                <HFlag code="TG" :squared="squared" />
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="大小控制">
            <ElSlider v-model="fontsize" :min="14" :max="30" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：正方形">
            <HChoiceBoolean v-model="squared" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElDescriptionsItem, ElSlider } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import HFlag from '../index.vue'

const squared = ref(false)
const fontsize = ref(18)
const myStyle = computed(() => ({ fontSize: `${fontsize.value}px` }))
</script>

<style lang="scss" module>
.flags {
    display: flex;
    align-items: center;

    > * + * {
        margin-left: 1em;
    }
}
</style>
