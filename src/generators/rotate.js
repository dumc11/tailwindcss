import _ from 'lodash'
import defineClasses from '../util/defineClasses'
import defineClass from '../util/defineClass'

export default function({ rotate, naming: { rotate: ns } }) {
  return _.map(rotate, (size, modifier) => {
    return defineClass(`${ns.base}${ns.modifierPrefix}${modifier}`, {
      'rotate': `${size}`,
    })
  })
}
