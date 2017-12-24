import _ from 'lodash'
import defineClasses from '../util/defineClasses'

function defineBorderWidthUtilities(borderWidths, ns) {
  const generators = [
    (width, modifier) =>
      defineClasses({
        [`${ns.base}${modifier}`]: {
          'border-width': `${width}`,
        },
      }),
    (width, modifier) =>
      defineClasses({
        [`${ns.withSides}${modifier}${ns.sides.top}`]: {
          'border-top-width': `${width}`,
        },
        [`${ns.withSides}${modifier}${ns.sides.right}`]: {
          'border-right-width': `${width}`,
        },
        [`${ns.withSides}${modifier}${ns.sides.bottom}`]: {
          'border-bottom-width': `${width}`,
        },
        [`${ns.withSides}${modifier}${ns.sides.left}`]: {
          'border-left-width': `${width}`,
        },
      }),
  ]

  return _.flatMap(generators, generator => {
    return _.flatMap(borderWidths, (width, modifier) => {
      return generator(width, modifier === 'default' ? '' : `${modifier}${ns.modifierPrefix}`)
    })
  })
}

module.exports = function({ borderWidths, naming: { borderWidths: ns } }) {
  return defineBorderWidthUtilities(borderWidths, ns)
}
