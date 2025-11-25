// import VCComponents from '@wfrog/vc'
import { createApp } from 'vue'
import App from './App.vue'
// import './style.css'
// import 'element-plus/theme-chalk/index.css'
import setupPlugins from './plugins'

// import '@wfrog/vc/index.css'

const app = createApp(App)
setupPlugins(app)
// app.use(VCComponents)

app.mount('#app')
