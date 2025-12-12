<template>
    <Wrapper>
        <template #default="{ direction }">
            <ElDescriptionsItem label="展示区">
                <HConfigProvider iconfont-url="//at.alicdn.com/t/font_2923719_83xgwd9wy2l.js">
                    <div :class="$style[direction]">
                        <HButton :icon="{ name: 'Search' }" type="primary" :size="mySize">Eleme 图标</HButton>
                        <HButton :icon="{ type: 'awesome', name: 'fas fa-dog' }" type="primary" :size="mySize">Awesome 图标</HButton>
                        <HButton :icon="{ type: 'svg', name: 'test' }" type="primary" :size="mySize">SVG 图标</HButton>
                    </div>
                    <div :class="$style[direction]">
                        <HButton :icon="{ name: 'Search', position: 'right' }" type="primary" :size="mySize">Eleme 图标</HButton>
                        <HButton :icon="{ type: 'awesome', name: 'fas fa-dog', position: 'right' }" type="primary" :size="mySize">Awesome 图标</HButton>
                        <HButton :icon="{ type: 'svg', name: 'test', position: 'right' }" type="primary" :size="mySize">SVG 图标</HButton>
                    </div>
                </HConfigProvider>
            </ElDescriptionsItem>
            <ElDescriptionsItem label="参数：大小">
                <HChoice v-model="mySize" :options="sizeOption" />
            </ElDescriptionsItem>
            <ElDescriptionsItem label="展示区：节流">
                <HButton type="primary" :size="mySize" @click="handleClick">快速点击</HButton>
            </ElDescriptionsItem>
            <ElDescriptionsItem label="展示区：提示">
                <HButton type="warning" :size="mySize" :confirm="{ type: myType }" @click="handleClick">点击会有二次确认</HButton>
            </ElDescriptionsItem>
            <ElDescriptionsItem label="参数：类型">
                <HChoice v-model="myType" :options="typeOption" />
            </ElDescriptionsItem>
            <ElDescriptionsItem label="结果">
                <div>节流间隔 800 毫秒，执行次数：{{ updated }}</div>
            </ElDescriptionsItem>
        </template>
    </Wrapper>
</template>

<script lang="ts" setup>
import HChoice from '@/components/choice/choice.vue'
import HConfigProvider from '@/components/config-provider/config-provider.vue'
import HButton from '../button.vue'

const mySize = ref('')
const sizeOption = [
    { label: '默认', value: '' },
    { label: '小', value: 'small' },
    { label: '大', value: 'large' },
]

const myType = ref<any>('messagebox')
const typeOption = [
    { label: 'none', value: 'none' },
    { label: 'messagebox', value: 'messagebox' },
    { label: 'popconfirm', value: 'popconfirm' },
]

const updated = ref(0)
function handleClick() { updated.value += 1 }
</script>

<style lang="scss" module>
.vertical {
    float: left;
    width: 50%;

    button + button {
        margin-top: 8px;
        margin-left: 0 !important;
    }
}

.horizontal {
    margin-top: 8px;
}
</style>
