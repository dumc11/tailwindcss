import _ from 'lodash'
import defineClass from '../util/defineClass'

function defineWidths(widths, ns) {
  return _.map(widths, (size, modifier) => {
    if (modifier.indexOf('vw') !== -1) {
      return defineClass(`${ns.screen}${ns.modifierPrefix}${modifier.replace('vw', '')}`, {
        width: `${size}`,
      })
    } else {
      return defineClass(`${ns.base}${ns.modifierPrefix}${modifier}`, {
        width: `${size}`,
      })
    }
  })
}

export default function(config) {
  return _.flatten([defineWidths(config.width, config.naming.width)])
}
