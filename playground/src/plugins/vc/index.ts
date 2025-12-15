import type { App } from 'vue'
import Vc from '@wfrog/vc'
import '@wfrog/vc/index.css'

function setupVc(app: App) {
    app.use(Vc)
}

export default setupVc
