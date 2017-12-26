import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ tracking, naming: { textTracking: ns } }) {
  return _.map(tracking, (value, modifier) => {
    if (modifier === 'normal') {
      return defineClass(`${ns.base}`, {
        'letter-spacing': `${value}`,
      })
    } else {
      return defineClass(`${ns.base}${ns.modifierPrefix}${modifier}`, {
        'letter-spacing': `${value}`,
      })
    }
  })
}
