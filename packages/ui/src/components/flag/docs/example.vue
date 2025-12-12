<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区1">
            <div :class="$style.flags" :style="myStyle">
                <HFlag code="RUS" :squared="squared" />
                <HFlag code="SPM" :squared="squared" />
                <HFlag code="SGP" :squared="squared" />
                <HFlag code="BA" :squared="squared" />
                <HFlag code="TG" :squared="squared" />
                <HFlag code="EU" :squared="squared" />
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="大小控制">
            <ElSlider v-model="fontsize" :min="14" :max="30" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区2：size 控制">
            <ElSpace>
                <HFlag code="EU" :squared="squared" size="2em" />
                <HFlag code="EU" :squared="squared" :size="40" />
                <HFlag code="EU" :squared="squared" size="30px" />
            </ElSpace>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：正方形">
            <HChoiceBoolean v-model="squared" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import HChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import HFlag from '../flag.vue'

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
