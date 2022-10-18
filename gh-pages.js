const ghpages = require('gh-pages')

ghpages.publish('docs/.vuepress/dist', {
    remote: 'gitee',
    message: 'Updates',
    repo: 'https://gitee.com/wellfrog16/vc.git',
}, () => {
    console.log('finished')
})
