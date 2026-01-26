export default {
    mounted: (el: HTMLElement) => {
        let input: HTMLInputElement | undefined
        if (el.tagName === 'input') {
            input = el as HTMLInputElement
        }
        else {
            const elInput = el.getElementsByTagName('input')
            if (elInput.length > 0) {
                input = elInput[0]
            }
        }
        if (input) {
            setTimeout(() => input.focus(), 0)
            const len = input.value.length
            input.setSelectionRange(len, len)
        }
    },
}
