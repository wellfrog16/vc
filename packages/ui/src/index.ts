import { version } from '../package.json'

export { default as HAwesomeIcon } from './components/awesome-icon/awesome-icon.vue'
export { default as HBackbottom } from './components/backbottom/backbottom.vue'
export { default as HButton } from './components/button/button.vue'
export { default as HChatContainer } from './components/chat-container/chat-container.vue'
export { default as HChoiceBoolean } from './components/choice-boolean/choice-boolean.vue'
export { default as HChoice } from './components/choice/choice.vue'
export { default as HConfigProvider } from './components/config-provider/config-provider.vue'
export { default as HCropper } from './components/cropper/cropper.vue'
export { default as HCurrency } from './components/currency/currency.vue'
export { default as HDaterangePicker } from './components/daterange-picker/daterange-picker.vue'
export { default as HDialogCameraUpload } from './components/dialog-camera-upload/dialog-camera-upload.vue'
export { default as HElIcon } from './components/el-icon/el-icon.vue'
export { default as HFlag } from './components/flag/flag.vue'
export { default as HIcon } from './components/icon/icon.vue'
export { default as HInput } from './components/input/input.vue'
export { default as HPCAPicker } from './components/pca-picker/pca-picker.vue'
export { default as HSelect } from './components/select/select.vue'
export { default as HSVGIcon } from './components/svg-icon/svg-icon.vue'
export { default as HTags } from './components/tags/tags.vue'
export { default as HThousandInput } from './components/thousand-input/thousand-input.vue'
export { default as HTreePicker } from './components/tree-picker/tree-picker.vue'
export { default as HUploadFile } from './components/upload-file/upload-file.vue'

const modules: Record<string, any> = import.meta.glob('./components/*/*.vue', { eager: true })
const upper = (_: any, letter: string) => letter.toUpperCase()

function install(Vue: any) {
    Object.keys(modules).forEach(key => {
        const [, name] = key.match(/\/components\/([a-z\-\d]+)\//) || []
        if (!name) { return false }

        let componentName = `H-${name}`.replace(/-(\w)/g, upper)
        if (name === 'qr-code') { componentName = 'HQRCode' }
        if (name === 'svg-icon') { componentName = 'HSVGIcon' }

        Vue.component(componentName, modules[key].default)
        return true
    })
}

export default {
    version,
    install,
}
