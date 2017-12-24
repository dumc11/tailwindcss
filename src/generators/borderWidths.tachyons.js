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
        [`${ns.withSides}${ns.sides.top}${ns.modifierPrefix}${modifier}`]: {
          'border-top-width': `${width}`,
        },
        [`${ns.withSides}${ns.sides.right}${ns.modifierPrefix}${modifier}`]: {
          'border-right-width': `${width}`,
        },
        [`${ns.withSides}${ns.sides.bottom}${ns.modifierPrefix}${modifier}`]: {
          'border-bottom-width': `${width}`,
        },
        [`${ns.withSides}${ns.sides.left}${ns.modifierPrefix}${modifier}`]: {
          'border-left-width': `${width}`,
        },
      }),
  ]

  return _.flatMap(generators, generator => {
    return _.flatMap(borderWidths, (width, modifier) => {
      return generator(width, modifier === 'default' ? '' : `${modifier}`)
    })
  })
}

module.exports = function({ borderWidths, naming: { borderWidths: ns } }) {
  return defineBorderWidthUtilities(borderWidths, ns)
}
