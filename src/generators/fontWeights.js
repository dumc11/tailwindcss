import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ fontWeights, naming: { fontWeights: ns } }) {
  let weights = _.map(fontWeights, (weight, modifier) => {
    return defineClass(`${ns.base}${ns.modifierPrefix}${modifier}`, {
      'font-weight': `${weight}`,
    })
  })
  if (ns.normal) {
    weights.push(
      defineClass(ns.normal, {
        'font-weight': 'normal',
      })
    )
  }
  if (ns.bold) {
    weights.push(
      defineClass(ns.bold, {
        'font-weight': 'bold',
      })
    )
  }
  return weights
}
