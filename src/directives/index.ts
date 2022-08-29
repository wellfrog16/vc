import { ClickOutside } from 'element-plus/es/directives/index'
import type { App } from 'vue'

// 指令写法仅针对element-ui
const modules: Record<string, any> = import.meta.glob('./**/index.ts', { eager: true })

const setupDirectives = (app: App) => {
    app.directive('click-outside', ClickOutside)

    Object.keys(modules).forEach(key => {
        const [, name] = key.match(/\/([a-z\-\d]+)\//) || []
        if (!name) { return }

        app.directive(name, modules[key].default)
    })
}

export default setupDirectives
