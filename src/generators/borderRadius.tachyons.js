import _ from 'lodash'
import defineClasses from '../util/defineClasses'

function defineBorderRadiusUtilities(borderRadiuses, ns) {
  const generators = [
    (radius, modifier) =>
      defineClasses({
        [`${ns.base}${modifier}`]: {
          'border-radius': `${radius}`,
        },
      }),
    (radius, modifier) =>
      defineClasses({
        [`${ns.withSides}${ns.sidesSeparator}${ns.sides.top}${modifier &&
          ns.modifierPrefix}${modifier}`]: {
          'border-top-left-radius': `${radius}`,
          'border-top-right-radius': `${radius}`,
        },
        [`${ns.withSides}${ns.sidesSeparator}${ns.sides.right}${modifier &&
          ns.modifierPrefix}${modifier}`]: {
          'border-top-right-radius': `${radius}`,
          'border-bottom-right-radius': `${radius}`,
        },
        [`${ns.withSides}${ns.sidesSeparator}${ns.sides.bottom}${modifier &&
          ns.modifierPrefix}${modifier}`]: {
          'border-bottom-right-radius': `${radius}`,
          'border-bottom-left-radius': `${radius}`,
        },
        [`${ns.withSides}${ns.sidesSeparator}${ns.sides.left}${modifier &&
          ns.modifierPrefix}${modifier}`]: {
          'border-top-left-radius': `${radius}`,
          'border-bottom-left-radius': `${radius}`,
        },
      }),
  ]

  return _.flatMap(generators, generator => {
    return _.flatMap(borderRadiuses, (radius, modifier) => {
      return generator(radius, modifier === 'default' ? '' : `${modifier}`)
    })
  })
}

module.exports = function({ borderRadius, naming: { borderRadius: ns } }) {
  return defineBorderRadiusUtilities(borderRadius, ns)
}
