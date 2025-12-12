import type { ComponentResolver } from 'unplugin-vue-components/types'

// 大写驼峰字符串转换成小写短横线字符串
function kebabToPascal(str: string) {
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
        .toLowerCase()
}

export default (): ComponentResolver => {
    return {
        type: 'component',
        resolve: (name: string) => {
            let compName = name
            if (name.startsWith('Vc')) {
                compName = name.slice(2)
            }
            else {
                return
            }
            // console.log(compName, name, kebabToPascal(compName))
            // return { name, from: '@wfrog/vc' }

            return {
                name: 'default',
                from: `@wfrog/vc/es/components/${kebabToPascal(compName)}`,
                // from: '@wfrog/vc',
                // sideEffects: `@wfrog/vc/es/components/${compName}/index.css`,
            }
        },
    }
}
