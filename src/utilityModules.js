const fs = require('fs')
const path = require('path')

let required

if (!process.env.LIBRARY || process.env.LIBRARY === 'tailwind') {
  required = [
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
    'zIndex',
  ]
} else if (process.env.LIBRARY === 'tachyons') {
  required = [
    'lists',
    'appearance',
    'backgroundAttachment',
    'backgroundColors',
    'backgroundPosition',
    'backgroundRepeat',
    'backgroundSize',
    'borders',
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
  ]
}

export default required.map(x => {
  let gen = path.resolve(`${__dirname}/generators/${x}.js`)
  let libGen = path.resolve(`${__dirname}/generators/${x}.${process.env.LIBRARY}.js`)
  let generator = fs.existsSync(libGen) ? require(libGen) : require(gen)

  return {
    name: x,
    generator: generator.default ? generator.default : generator,
  }
})
