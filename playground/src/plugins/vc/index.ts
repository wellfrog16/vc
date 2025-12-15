import type { App } from 'vue'
import Vc from '@wfrog/vc-ui'
import '@wfrog/vc-ui/index.css'

function setupVc(app: App) {
    app.use(Vc)
}

export default setupVc
