import { defaultWindow, loader } from '@wfrog/utils'
import { onMounted } from 'vue'

export function useSVGIconExample() {
    const loaderSource = async () => {
        await loader.loadScriptSingle('//at.alicdn.com/t/font_2923719_83xgwd9wy2l.js')
    }

    onMounted(() => {
        if (defaultWindow) {
            if (!defaultWindow.VC?.isSVGIconLock) {
                defaultWindow.VC = { ...defaultWindow.VC, isSVGIconLock: true }
                loaderSource()
            }
        }
    })
}
