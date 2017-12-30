import fs from 'fs'
import path from 'path'
import postcss from 'postcss'

export default function() {
  return function(css) {
    css.walkAtRules('tailwind', atRule => {
      if (atRule.params !== 'preflight') {
        return
      }

      let preflight = 'preflight'
      let customPreflight = preflight + '.' + process.env.TAILWIND_FLAVOUR
      if (fs.existsSync(path.resolve(__dirname, '../../css/', customPreflight + '.css'))) {
        preflight = customPreflight
      }
      atRule.before(postcss.parse(fs.readFileSync(`${__dirname}/../../css/${preflight}.css`, 'utf8')))
      atRule.remove()
    })
  }
}
