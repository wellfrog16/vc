import { version } from '../package.json'

export { default as VcAwesomeIcon } from './components/awesome-icon/awesome-icon.vue'
export { default as VcBackbottom } from './components/backbottom/backbottom.vue'
export { default as VcButton } from './components/button/button.vue'
export { default as VcChatContainer } from './components/chat-container/chat-container.vue'
export { default as VcChoiceBoolean } from './components/choice-boolean/choice-boolean.vue'
export { default as VcChoice } from './components/choice/choice.vue'
export { default as VcColorSwitcher } from './components/color-switcher/color-switcher.vue'
export { default as VcConfigProvider } from './components/config-provider/config-provider.vue'
export { default as VcCropper } from './components/cropper/cropper.vue'
export { default as VcCurrency } from './components/currency/currency.vue'
export { default as VcDarkSwitcher } from './components/dark-switcher/dark-switcher.vue'
export { default as VcDaterangePicker } from './components/daterange-picker/daterange-picker.vue'
export { default as VcDialogCameraUpload } from './components/dialog-camera-upload/dialog-camera-upload.vue'
export { default as VcDialogMapPoint } from './components/dialog-map-point/dialog-map-point.vue'
export { default as VcDialogUploadImages } from './components/dialog-upload-images/dialog-upload-images.vue'
export { default as VcDialog } from './components/dialog/dialog.vue'
export { default as VcDragVerify } from './components/drag-verify/drag-verify.vue'
export { default as VcDrawer } from './components/drawer/drawer.vue'
export { default as VcDualPane } from './components/dual-pane/dual-pane.vue'
export { default as VcEasyPagination } from './components/easy-pagination/easy-pagination.vue'
export { default as VcElIcon } from './components/el-icon/el-icon.vue'
export { default as VcFlag } from './components/flag/flag.vue'
export { default as VcIconPicker } from './components/icon-picker/icon-picker.vue'
export { default as VcIcon } from './components/icon/icon.vue'
export { default as VcIconifyIcon } from './components/iconify-icon/iconify-icon.vue'
export { default as VcImage } from './components/image/image.vue'
export { default as VcInputNumber } from './components/input-number/input-number.vue'
export { default as VcInput } from './components/input/input.vue'
export { default as VcPcaPicker } from './components/pca-picker/pca-picker.vue'
export { default as VcQrCode } from './components/qr-code/qr-code.vue'
export { default as VcScreenfull } from './components/screenfull/screenfull.vue'
export { default as VcScrollbar } from './components/scrollbar/scrollbar.vue'
export { default as VcSelect } from './components/select/select.vue'
export { default as VcSinglePlayer } from './components/single-player/single-player.vue'
export { default as VcSvgIcon } from './components/svg-icon/svg-icon.vue'
export { default as VcSwitch } from './components/switch/switch.vue'
export { default as VcSyncScrollContainer } from './components/sync-scroll-container/sync-scroll-container.vue'
export { default as VcTags } from './components/tags/tags.vue'
export { default as VcTextEllipsis } from './components/text-ellipsis/text-ellipsis.vue'
export { default as VcThousandInput } from './components/thousand-input/thousand-input.vue'
export { default as VcTinymce } from './components/tinymce/tinymce.vue'
export { default as VcTreePicker } from './components/tree-picker/tree-picker.vue'
export { default as VcUploadFile } from './components/upload-file/upload-file.vue'

const modules: Record<string, any> = import.meta.glob('./components/*/*.vue', { eager: true })
const upper = (_: any, letter: string) => letter.toUpperCase()

function install(Vue: any) {
    Object.keys(modules).forEach(key => {
        const [, name] = key.match(/\/components\/([a-z\-\d]+)\//) || []
        if (!name) { return false }

        const componentName = `Vc-${name}`.replace(/-(\w)/g, upper)
        // console.log(`[VcUI] Register component: ${componentName}`)
        // if (name === 'qr-code') { componentName = 'VcQRCode' }
        // if (name === 'svg-icon') { componentName = 'VcSVGIcon' }
        // if (name === 'pca-picker') { componentName = 'VcPCAPicker' }

        Vue.component(componentName, modules[key].default)
        return true
    })
}

export default {
    version,
    install,
}
