import { defaultWindow, loader } from '@wfrog/utils'
import { onMounted } from 'vue'

function useExample() {
    const loaderSource = async () => {
        await loader.loadScriptSingle('//at.alicdn.com/t/font_2923719_83xgwd9wy2l.js')
    }

    onMounted(() => {
        if (defaultWindow) {
            if (!defaultWindow.ElementPlusComponents?.isSVGIconLock) {
                defaultWindow.ElementPlusComponents = { ...defaultWindow.ElementPlusComponents, isSVGIconLock: true }
                loaderSource()
            }
        }
    })
}

export default useExample
