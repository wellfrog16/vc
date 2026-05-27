<template>
    <VcConfigProvider :info-tooltip="{ onShowed: handleShowed }">
        <Wrapper>
            <ElDescriptionsItem label="展示区">
                <div>寂寞沙洲冷<VcInfoTooltip content="寂寞沙洲冷是一首周传雄的歌曲" />和白夜行<VcInfoTooltip content="白夜行是一本东野圭吾的小说" /></div>
            </ElDescriptionsItem>
            <ElDescriptionsItem label="展示区：异步">
                <div>寂寞沙洲冷<VcInfoTooltip code="a" />和白夜行<VcInfoTooltip code="b" /></div>
            </ElDescriptionsItem>
        </Wrapper>
    </VcConfigProvider>
</template>

<script lang="ts" setup>
import VcConfigProvider from '@/components/config-provider'
import VcInfoTooltip from '../info-tooltip.vue'

function handleShowed(code: string | undefined, content: string | undefined, setContent: (content: string) => void) {
    if (content) { return }
    setContent('loading...')
    setTimeout(() => {
        if (code === 'a') {
            setContent('寂寞沙洲冷是一首周传雄的歌曲')
        }
        else if (code === 'b') {
            setContent('白夜行是一本东野圭吾的小说')
        }
    }, 1000)
}
</script>

<style lang="scss" module></style>
