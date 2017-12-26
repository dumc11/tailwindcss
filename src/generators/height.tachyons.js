import _ from 'lodash'
import defineClass from '../util/defineClass'

function defineHeights(heights, ns) {
  return _.map(heights, (size, modifier) => {
    if (modifier.indexOf('vh') !== -1) {
      return defineClass(`${ns.screen}${ns.modifierPrefix}${modifier.replace('vh', '')}`, {
        height: `${size}`,
      })
    } else {
      return defineClass(`${ns.base}${ns.modifierPrefix}${modifier}`, {
        height: `${size}`,
      })
    }
  })
}

export default function(config) {
  return _.flatten([defineHeights(config.height, config.naming.height)])
}
