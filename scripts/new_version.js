const { execSync } = require('child_process')
const { version } = require('../package.json')

// Publishing to vsce and ovsx is it's on thing which I chose not to add here

const cmd = [
  `git add .`,
  `git commit -m ${version}`,
  `git push --follow-tags`
]

cmd.map(
  command => execSync(command, { stdio: 'inherit' })
)
