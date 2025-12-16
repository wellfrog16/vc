const { exec } = require('node:child_process')

function runGitPush() {
    exec('git push', (error, stdout, stderr) => {
        if (error) {
            console.log('Push失败，2秒后重试...')
            console.log(`Error: ${error.message}`)
            setTimeout(runGitPush, 2000)
            return
        }
        console.log('Push成功')
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
    })
}

runGitPush()
