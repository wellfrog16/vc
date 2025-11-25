import type { App } from 'vue'
import VC from '@wfrog/vc'
import '@wfrog/vc/index.css'

function setupVC(app: App) {
    app.use(VC)
}

export default setupVC
