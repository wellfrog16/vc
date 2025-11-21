export default {
    mounted: (el: HTMLElement) => {
        if (el.tagName === 'input') {
            setTimeout(() => el.focus(), 0)
        }
        else {
            const elInput = el.getElementsByTagName('input')
            if (elInput.length > 0) { setTimeout(() => elInput[0].focus(), 0) }
        }
    },
}
