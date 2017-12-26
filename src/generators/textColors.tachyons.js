import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ textColors, naming: { textColors: ns } }) {
  let classes = _.map(textColors, (color, modifier) => {
    return defineClass(`${ns.base}${ns.modifierPrefix}${modifier}`, {
      color,
    })
  })

  classes.push(defineClass(ns.inherit, {
    'color': 'inherit'
  }))

  return classes
}
