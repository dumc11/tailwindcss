import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ backgroundForegroundColors, naming: { backgroundForegroundColors: ns } }) {
  return _.map(backgroundForegroundColors, (color, className) => {
    return defineClass(`${ns.base}${ns.modifierPrefix}${className}`, {
      'background-color': color[0],
      'color': color[1]
    })
  })
}
