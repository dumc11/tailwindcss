import _ from 'lodash'
import defineClasses from '../util/defineClasses'
import defineClass from '../util/defineClass'

export default function({ position, naming: { position: ns } }) {
  let classes = defineClasses({
    [ns.static]: { position: 'static' },
    [ns.fixed]: { position: 'fixed' },
    [ns.absolute]: { position: 'absolute' },
    [ns.relative]: { position: 'relative' },
    [ns.pinNone]: {
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto',
    },
    [ns.pin]: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    [ns.pinY]: { top: 0, bottom: 0 },
    [ns.pinX]: { right: 0, left: 0 },
  })

  classes = classes.concat(
    _.flatMap(position, (value, key) => {
      return _.map(ns.sides, side => {
        return defineClass(`${side}${ns.modifierPrefix}${key}`, {
          [side]: value,
        })
      })
    })
  )

  return classes
}
