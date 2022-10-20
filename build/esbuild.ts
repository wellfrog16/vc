import { build } from 'esbuild'
import klawSync from 'klaw-sync'
import pluginVue from '@wfrog/esbuild-plugin-vue-next'
import path from 'path'
import type { BuildOptions } from 'esbuild'

const COMPONENTS_PATH = path.resolve(__dirname, '../src/components')

const componentEntrys = klawSync(COMPONENTS_PATH, {
    nofile: true,
    depthLimit: 0,
}).map(dir => `${dir.path}/index.vue`)

async function run(options?: BuildOptions) {
    await build({
        outdir: './es/components',
        outExtension: { '.js': '.mjs' },
        bundle: true,
        entryPoints: componentEntrys,
        sourcemap: false,
        plugins: [
            pluginVue(),
        ],
        // loader: { '.png': 'dataurl' },
        external: ['vue', 'element-plus', 'lodash-es', '@element-plus/icons-vue', 'vuedraggable', '@wfrog/utils'],
        format: 'esm',
        minify: false,
        ...options,
    })
}

run()
