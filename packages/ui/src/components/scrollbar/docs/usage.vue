<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'flex', description: '修改成 flex 布局', type: 'boolean', defaultValue: 'true' },
        { param: 'fill-height', description: '给最外层一个 10px 高度，以便在 flex 布局中占满剩余空间', type: 'boolean', defaultValue: 'true' },
        { param: 'view-margin', description: '设置内间隔', type: 'string', defaultValue: '0px 10px' },
        { param: 'scroll-load', description: '是否开启滚动加载', type: 'boolean', defaultValue: 'false' },
        { param: 'scroll-load-disabled', description: '是否禁用继续滚动加载（例如没有更多数据时）', type: 'boolean', defaultValue: 'false' },
        { param: 'scroll-load-root-margin', description: 'IntersectionObserver 的 rootMargin', type: 'string', defaultValue: '100px' },
        { param: 'scroll-load-threshold', description: 'IntersectionObserver 的 threshold', type: 'number', defaultValue: '0' },
        { param: 'loading', description: '是否正在加载中，用于展示底部加载状态并阻止继续触发 loadMore', type: 'boolean', defaultValue: 'false' },
        { param: 'loading-text', description: '底部加载中提示文本', type: 'string', defaultValue: '加载中...' },
        { param: 'no-more-text', description: '底部没有更多数据提示文本', type: 'string', defaultValue: '没有更多了' },
        { param: 'empty', description: '是否展示空状态（与 noMore 不同，空状态表示从未加载到数据）', type: 'boolean', defaultValue: 'false' },
        { param: 'empty-text', description: '空状态提示文本', type: 'string', defaultValue: '暂无数据' },
        { param: '其他', description: 'el-scrollbar 的属性、事件', type: 'https://element-plus.org/zh-CN/component/scrollbar#api' },
    ],
    events: [
        { name: 'load-more', description: '滚动到底部时触发', param: 'void' },
    ],
    slots: [
        { name: 'loading', description: '自定义底部加载中状态' },
        { name: 'no-more', description: '自定义底部无更多数据状态' },
        { name: 'empty', description: '自定义空状态内容' },
    ],
}
</script>
