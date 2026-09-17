import type { Theme } from 'vitepress'
import { ID_INJECTION_KEY, ZINDEX_INJECTION_KEY } from 'element-plus'
import DefaultTheme from 'vitepress/theme'
// import Wrapper from '../../src/components/example-wrapper.vue'
import './index.scss'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // SSR 构建时需提供 element-plus 的 id/z-index provider，否则 useId/useZIndex 会提示 IdInjection/ZIndexInjection
        app.provide(ID_INJECTION_KEY, {
            prefix: 1024,
            current: 0,
        })
        app.provide(ZINDEX_INJECTION_KEY, {
            current: 0,
        })
        // app.component('Wrapper', Wrapper) // 可以全局注册，但是不会有类型提示
    },
} satisfies Theme
