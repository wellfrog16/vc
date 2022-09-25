import { loader } from '@wfrog/utils'
import { isNumber } from 'lodash-es'
import type { Directive } from 'vue'

const thousand: Directive = {
    mounted: async (el, binding) => {
        const Cleave = await loader.loadCdnSingle('cleave')
        const [elInput] = el.getElementsByTagName('input')
        elInput.cleave = new Cleave(elInput, {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: isNumber(binding.value?.decimalScale) ? binding.value.decimalScale : 2,
            numeralIntegerScale: isNumber(binding.value?.integerScale) ? binding.value.integerScale : 0,
        })
        elInput.style.textAlign = 'right'
        elInput.style.fontFamily = 'Pathway Gothic One'
    },
    updated: el => {
        setTimeout(() => {
            const event = new Event('input', { bubbles: true })
            const [elInput] = el.getElementsByTagName('input')
            elInput.dispatchEvent(event)
            elInput.value = elInput.cleave?.properties?.result
        }, 100)
    },
}

export default thousand
