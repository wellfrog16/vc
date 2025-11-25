import type { App } from 'vue'
import setupElementPlus from './element-plus'
import router from './router'
import setupVC from './vc'

function setupPlugins(app: App) {
    app.use(router)
    setupElementPlus(app)
    setupVC(app)
}

export default setupPlugins
