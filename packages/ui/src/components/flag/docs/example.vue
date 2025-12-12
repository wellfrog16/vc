<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区1">
            <div :class="$style.flags" :style="myStyle">
                <VcFlag code="RUS" :squared="squared" />
                <VcFlag code="SPM" :squared="squared" />
                <VcFlag code="SGP" :squared="squared" />
                <VcFlag code="BA" :squared="squared" />
                <VcFlag code="TG" :squared="squared" />
                <VcFlag code="EU" :squared="squared" />
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="大小控制">
            <ElSlider v-model="fontsize" :min="14" :max="30" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区2：size 控制">
            <ElSpace>
                <VcFlag code="EU" :squared="squared" size="2em" />
                <VcFlag code="EU" :squared="squared" :size="40" />
                <VcFlag code="EU" :squared="squared" size="30px" />
            </ElSpace>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：正方形">
            <VcChoiceBoolean v-model="squared" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcFlag from '../flag.vue'

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
