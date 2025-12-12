import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import Wrapper from '../../src/components/example-wrapper.vue'
import './index.scss'

export default {
    extends: DefaultTheme,
    enhanceApp({ _app }) {
        // app.component('Wrapper', Wrapper) // 可以全局注册，但是不会有类型提示
    },
} satisfies Theme
