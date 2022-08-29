import { loader } from '@frog-res/h-utils'
import type { Directive } from 'vue'

const cleave: Directive = {
    mounted: async (el, binding) => {
        const Cleave = await loader.loadCdnSingle('cleave')
        const [elInput] = el.getElementsByTagName('input')
        elInput.cleave = new Cleave(elInput, binding.value || {})
    },
    updated: el => {
        const event = new Event('input', { bubbles: true })
        const [elInput] = el.getElementsByTagName('input')
        setTimeout(() => {
            elInput.value = elInput.cleave.properties.result
            elInput.dispatchEvent(event)
        }, 100)
    },
}

export default cleave
