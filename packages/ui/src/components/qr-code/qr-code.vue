<template>
    <component :is="tag" ref="elementRef" />
</template>

<script lang="ts" setup>
import type { ICDNType } from '@wfrog/utils'
import type { IQRCodeProps } from './qr-code'
import { loader } from '@wfrog/utils'

const props = withDefaults(defineProps<IQRCodeProps>(), {
    tag: 'canvas',
    value: '',
    option: () => ({}),
    width: 128,
    height: 128,
    margin: 1,
    version: '1.5.1',
})

const elementRef = useTemplateRef<any>('elementRef')

async function createQR() {
    const QRCode = (await loader.loadCdnSingle('QRCode', props.version)) as ICDNType['QRCode']
    const { tag, value } = props
    const option = { width: props.width, height: props.height, margin: props.margin, ...props.option }

    switch (tag) {
        case 'canvas':
            QRCode.toCanvas(elementRef.value, value, option, (error: Error) => {
                if (error) { throw error }
            })
            break

        case 'img':
            QRCode.toDataURL(value, option, (error: Error, url: string) => {
                if (error) { throw error }
                elementRef.value.src = url
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
                        elementRef.value.setAttribute(item.name, item.value)
                    })

                    elementRef.value.innerHTML = svg.innerHTML
                }
            })
            break

        default: break
    }
}

onMounted(() => { createQR() })
</script>
