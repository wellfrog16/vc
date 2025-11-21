import type { Plugin } from 'vite'
import { relative } from 'node:path'
import process from 'node:process'

/** 把每个抽离出的 .css 文件顶部加上来源 Vue 文件注释 */
function cssSource() {
    const fileMap = new Map<string, string>()

    const plugin: Plugin = {
        name: 'trace-css-source',

        renderChunk(_, chunk) {
            const cssAssetName = `${chunk.name}.css`
            for (const modId of Object.keys(chunk.modules)) {
                if (modId.includes('lang.module.scss')) {
                    fileMap.set(modId, cssAssetName)
                }
            }
            // console.log(styleToAssetName)
        },

        generateBundle(_, bundle) {
            const cssToVue = new Map<string, Set<string>>()
            for (const [modId, assetName] of fileMap) {
                const vueFile = modId.split('?')[0]
                const vueSet = cssToVue.get(assetName) || new Set()
                vueSet.add(vueFile)
                cssToVue.set(assetName, vueSet)
            }

            // 真正追加注释
            for (const [assetName, vueSet] of cssToVue) {
                const asset = bundle[`es/assets/${assetName}`]
                if (asset?.type === 'asset') {
                    const shortNames = Array.from(vueSet)
                        .map(f => relative(process.cwd(), f).replace(/\\/g, '/'))
                        .join(',')
                    const prefix = `/* source: ${shortNames} */\n`
                    asset.source = prefix + asset.source
                }
            }
        },
    }

    return plugin
}

export default cssSource
