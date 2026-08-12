const { exec } = require('node:child_process')
const process = require('node:process')

const command = process.argv[2] // 'push' 或 'pull'
const action = command === 'push' ? 'Push' : 'Pull'

function runGit() {
    exec(`git ${command}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`${action}失败，2秒后重试...`)
            console.log(`Error: ${error.message}`)
            setTimeout(runGit, 2000)
            return
        }
        console.log(`${action}成功`)
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
    })
}

runGit()
