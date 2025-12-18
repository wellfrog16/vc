import type { VNode } from 'vue'

function renderTo(
    container: string | Element,
    ...args: Parameters<typeof h> // ← 直接复用 h 的参数类型
): VNode {
    const el = typeof container === 'string'
        ? document.querySelector(container)
        : container
    if (!el)
        throw new Error(`[renderTo] 容器不存在：${container}`)

    const vnode = h(...args)
    const app = createApp({ render: () => vnode })
    app.mount(el)
    return vnode
}

export default renderTo
