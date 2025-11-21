import { useWindowSize } from '@vueuse/core'

export default () => {
    const { width } = useWindowSize()

    return {
        isSmallScreen: width.value <= 768,
    }
}
