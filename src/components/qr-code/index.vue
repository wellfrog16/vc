<template>
    <component :is="tag" ref="element" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { loader } from '@wfrog/utils'
import type { ICDNType } from '@wfrog/utils'

const props = defineProps({
    tag: { type: String, default: 'canvas' },
    value: { type: String, default: '' },
    option: { type: Object, default: () => {} },
    width: { type: Number },
    height: { type: Number },
    margin: { type: Number, default: 1 },
    version: { type: String, default: '1.5.1' },
})

const element = ref()

const createQR = async () => {
    // loader.loadScriptSingle('//api.map.baidu.com/api?v=3.0&ak=rrK5thxGKxN45pnaH2Gd0ZxyFkr8MaTl')
    loader.loadScriptSingle('//api.map.baidu.com/getscript?v=3.0&ak=rrK5thxGKxN45pnaH2Gd0ZxyFkr8MaTl&services=&t=20220816154130')

    const QRCode = (await loader.loadCdnSingle('QRCode', props.version)) as ICDNType['QRCode']
    const { tag, value } = props
    const option = { width: props.width, height: props.height, margin: props.margin, ...props.option }

    switch (tag) {
        case 'canvas':
            QRCode.toCanvas(element.value, value, option, (error: Error) => {
                if (error) { throw error }
            })
            break

        case 'img':
            QRCode.toDataURL(value, option, (error: Error, url: string) => {
                if (error) { throw error }
                element.value.src = url
            })
            break

        case 'svg':
            QRCode.toString(value, option, (error: Error, string: string) => {
                if (error) { throw error }

                const div = document.createElement('div')
                div.innerHTML = string
                const svg = div.querySelector('svg')

                if (svg) {
                    Object.keys(svg.attributes).forEach((key: any) => {
                        const item = svg.attributes[key]
                        element.value.setAttribute(item.name, item.value)
                    })

                    element.value.innerHTML = svg.innerHTML
                }
            })
            break

        default: break
    }
}

onMounted(() => { createQR() })
</script>
