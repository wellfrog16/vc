import path from 'node:path'
import klawSync from 'klaw-sync'

export function getFoldFile(root: string, nofile: boolean = false) {
    const result = new Map<string, { fileName: string, path: string }>()
    klawSync(root, {
        nofile,
        depthLimit: 0,
    }).forEach(dir => {
        const lastPart = path.basename(dir.path)
        result.set(lastPart, { fileName: lastPart, path: dir.path })
    })
    return result
}
