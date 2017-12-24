
const generators = [
  'lists',
  'appearance',
  'backgroundAttachment',
  'backgroundColors',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize',
  'borderColors',
  'borderRadius',
  'borderStyle',
  'borderWidths',
  'cursor',
  'display',
  'flexbox',
  'float',
  'fonts',
  'fontWeights',
  'height',
  'leading',
  'margin',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'negativeMargin',
  'opacity',
  'overflow',
  'padding',
  'pointerEvents',
  'position',
  'resize',
  'shadows',
  'svgFill',
  'svgStroke',
  'textAlign',
  'textColors',
  'textSizes',
  'textStyle',
  'tracking',
  'userSelect',
  'verticalAlign',
  'visibility',
  'whitespace',
  'width',
  'zIndex'
]

const fs = require('fs')
const path = require('path')
const base = `${__dirname}/generators`

let result =  generators.map(x => {
  let genLibPath = path.resolve(`${base}/${x}.${process.env.LIBRARY}.js`)
  let genPath = path.resolve(`${base}/${x}.js`)

  return {
    name: x,
    generator: fs.existsSync(genLibPath) ? require(genLibPath).default : require(genPath).default
  }
})

export default result
