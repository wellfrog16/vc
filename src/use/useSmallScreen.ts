import { useWindowSize } from '@vueuse/core'

export default () => {
    const { width } = useWindowSize()
    console.log(width.value)

    return {
        isSmallScreen: width.value <= 768,
    }
}
