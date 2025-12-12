import type { App } from 'vue'
import router from './router'
// import setupVC from './vc'
// import setupElementPlus from './element-plus'
import 'element-plus/theme-chalk/index.css' // 某些组件没有加载到样式，这里暂时全局全量引入

function setupPlugins(app: App) {
    app.use(router)
    // setupElementPlus(app)
    // setupVC(app)
}

export default setupPlugins
