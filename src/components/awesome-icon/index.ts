import AwesomeIcon from './index.vue'
import type { App } from 'vue'

AwesomeIcon.install = (app: App) => {
    app.component('AwesomeIcon', AwesomeIcon)
}

export default AwesomeIcon
