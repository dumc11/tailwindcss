import _ from 'lodash'
import defineClass from '../util/defineClass'

function defineHeights(heights, ns) {
  return _.map(heights, (size, modifier) => {
    if (modifier.indexOf('vh') !== -1) {
      return defineClass(`${ns.screen}${ns.modifierPrefix}${modifier.replace('vh', '')}`, {
        'min-height': `${size}`,
      })
    } else {
      return defineClass(`${ns.base}${ns.modifierPrefix}${modifier}`, {
        'min-height': `${size}`,
      })
    }
  })
}

export default function(config) {
  return _.flatten([defineHeights(config.minHeight, config.naming.minHeight)])
}
