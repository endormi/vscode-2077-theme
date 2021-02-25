const { execSync } = require('child_process')
const { version } = require('../package.json')

// Publishing to vsce and ovsx is it's own thing and for that reason (i'm out) I chose not to add them here

const cmd = [
  `vsce package`,
  `git add .`,
  `git commit -m ${version}`,
  `git push --follow-tags`
]

cmd.map(
  command => execSync(command, { stdio: 'inherit' })
)
