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

async function componentRun(options?: BuildOptions) {
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

componentRun()

const DIRECTIVES_PATH = path.resolve(__dirname, '../src/directives')

const directiveEntrys = klawSync(DIRECTIVES_PATH, {
    nofile: true,
    depthLimit: 0,
}).map(dir => `${dir.path}/index.ts`)
directiveEntrys.push(`${DIRECTIVES_PATH}/index.ts`)

async function directiveRun(options?: BuildOptions) {
    await build({
        outdir: './es/directives',
        outExtension: { '.js': '.mjs' },
        bundle: true,
        entryPoints: directiveEntrys,
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

directiveRun()

const USE_PATH = path.resolve(__dirname, '../src/use')

const useEntrys = klawSync(USE_PATH, {
    nofile: false,
    depthLimit: 0,
}).map(dir => `${dir.path}`)

async function useRun(options?: BuildOptions) {
    await build({
        outdir: './es/use',
        outExtension: { '.js': '.mjs' },
        bundle: true,
        entryPoints: useEntrys,
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

useRun()
