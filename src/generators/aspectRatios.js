import _ from 'lodash'
import defineClasses from '../util/defineClasses'
import defineClass from '../util/defineClass'

export default function({ aspectRatios, naming: { aspectRatios: ns } }) {
  let classes = _.map(aspectRatios, (size, modifier) => {
    return defineClass(`${ns.base}${ns.modifierPrefix}${modifier}`, {
      'padding-bottom': `${size}`,
    })
  })

  classes = classes.concat(
    defineClasses({
      [ns.base]: {
        height: '0',
        position: 'relative',
      },
      [ns.object]: {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '100%',
        'z-index': '100',
      },
    })
  )

  return classes
}
