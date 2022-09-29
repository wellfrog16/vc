const ghpages = require('gh-pages')

ghpages.publish('docs/.vuepress/dist', {
    remote: 'gitee',
    message: 'Updates',
    repo: 'https://gitee.com/wellfrog16/element-plus-components.git',
}, () => {
    console.log('finished')
})
