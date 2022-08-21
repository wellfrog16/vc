const ghpages = require('gh-pages')

ghpages.publish('docs/.vuepress/dist', {
    message: 'Updates',
}, () => {
    console.log('finished')
})
