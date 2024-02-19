import packageJson from '../package.json'

export { default as HAwesomeIcon } from './components/awesome-icon/index.vue'
export { default as HButton } from './components/button/index.vue'
export { default as HChoice } from './components/choice/index.vue'
export { default as HChoiceBoolean } from './components/choice-boolean/index.vue'
export { default as HConfigProvider } from './components/config-provider/index.vue'
export { default as HCropper } from './components/cropper/index.vue'
export { default as HCurrency } from './components/currency/index.vue'
export { default as HDaterangePicker } from './components/daterange-picker/index.vue'
export { default as HDialog } from './components/dialog/index.vue'
export { default as HDialogCameraUpload } from './components/dialog-camera-upload/index.vue'
export { default as HDialogMapPoint } from './components/dialog-map-point/index.vue'
export { default as HDialogUploadImages } from './components/dialog-upload-images/index.vue'
export { default as HDrawer } from './components/drawer/index.vue'
export { default as HEasyPagination } from './components/easy-pagination/index.vue'
export { default as HElIcon } from './components/el-icon/index.vue'
export { default as HFlag } from './components/flag/index.vue'
export { default as HIcon } from './components/icon/index.vue'
export { default as HImage } from './components/image/index.vue'
export { default as HInput } from './components/input/index.vue'
export { default as HInputNumber } from './components/input-number/index.vue'
export { default as HQRCode } from './components/qr-code/index.vue'
export { default as HScreenfull } from './components/screenfull/index.vue'
export { default as HSelect } from './components/select/index.vue'
export { default as HSinglePlayer } from './components/single-player/index.vue'
export { default as HSVGIcon } from './components/svg-icon/index.vue'
export { default as HSwitch } from './components/switch/index.vue'
export { default as HTags } from './components/tags/index.vue'
export { default as HTextEllipsis } from './components/text-ellipsis/index.vue'
export { default as HThousandInput } from './components/thousand-input/index.vue'
export { default as HTinymce } from './components/tinymce/index.vue'
export { default as HTreePicker } from './components/tree-picker/index.vue'
export { default as HUploadFile } from './components/upload-file/index.vue'

const modules: Record<string, any> = import.meta.glob('./**/index.vue', { eager: true })
const upper = (_: any, letter: string) => letter.toUpperCase()

const install = function (Vue: any) {
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
    version: packageJson.version,
    install,
}
