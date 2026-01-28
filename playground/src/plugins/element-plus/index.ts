import type { App } from 'vue'
import ElementPlus from 'element-plus'
// import './index.scss'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

function setupElementPlus(app: App) {
    app.use(ElementPlus)
    // , { size: 'medium', zIndex: 800 }
    // app.config.globalProperties.$ELEMENT = { size: 'medium', zIndex: 800 }
}

export default setupElementPlus
