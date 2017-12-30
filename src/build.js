import fs from 'fs'
import path from 'path'
import postcss from 'postcss'
import tailwind from '..'
import CleanCSS from 'clean-css'

function buildDistFile(filename) {
  let toFilename

  if (process.env.TAILWIND_FLAVOUR === 'tailwind') {
    toFilename = filename
  } else {
    toFilename = filename.replace('.' + process.env.TAILWIND_FLAVOUR, '')
  }

  return new Promise((resolve, reject) => {
    console.log(`Processing ./css/${filename}.css...`)

    fs.readFile(`./css/${filename}.css`, (err, css) => {
      if (err) throw err

      return postcss([tailwind(), require('autoprefixer')])
        .process(css, {
          from: `./css/${filename}.css`,
          to: `./dist/${toFilename}.css`,
          map: { inline: false },
        })
        .then(result => {
          fs.writeFileSync(`./dist/${toFilename}.css`, result.css)
          if (result.map) {
            fs.writeFileSync(`./dist/${toFilename}.css.map`, result.map)
          }
          return result
        })
        .then(result => {
          const minified = new CleanCSS().minify(result.css)
          fs.writeFileSync(`./dist/${toFilename}.min.css`, minified.styles)
        })
        .then(resolve)
        .catch(error => {
          console.log(error)
          reject()
        })
    })
  })
}

console.info('Building Tailwind!')

let preflight = 'preflight'
let utilities = 'utilities'
let base = 'tailwind'

if (process.env.TAILWIND_FLAVOUR !== 'tailwind') {
  let customPreflight = preflight + '.' + process.env.TAILWIND_FLAVOUR
  let customUtilities = utilities + '.' + process.env.TAILWIND_FLAVOUR
  let customBase = base + '.' + process.env.TAILWIND_FLAVOUR

  if (fs.existsSync(path.resolve(__dirname, '../css/', customPreflight + '.css'))) {
    preflight = customPreflight
  }
  if (fs.existsSync(path.resolve(__dirname, '../css/', customUtilities + '.css'))) {
    utilities = customUtilities
  }
  if (fs.existsSync(path.resolve(__dirname, '../css/', customBase + '.css'))) {
    base = customBase
  }
}

console.log('Using ', preflight, utilities, base)

Promise.all([buildDistFile(preflight), buildDistFile(utilities), buildDistFile(base)]).then(() => {
  console.log('Finished Building Tailwind!')
})
