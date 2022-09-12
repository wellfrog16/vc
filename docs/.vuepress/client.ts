import { defineClientConfig } from '@vuepress/client'
import setupDirectives from '../../src/directives'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        setupDirectives(app)
        // console.log(app)
        // console.log('-----------------')
    },
    setup() { },
    rootComponents: [],
})