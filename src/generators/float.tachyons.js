import _ from 'lodash'
import postcss from 'postcss'
import defineClasses from '../util/defineClasses'

export default function({ naming: { floats: ns } }) {
  return _.concat(
    defineClasses({
      [ns.floatRight]: { float: 'right' },
      [ns.floatLeft]: { float: 'left' },
      [ns.floatNone]: { float: 'none' },
      [ns.clearLeft]: { clear: 'left' },
      [ns.clearRight]: { clear: 'right' },
      [ns.clearBoth]: { clear: 'both' },
      [ns.clearNone]: { clear: 'none' },
    }),
    postcss.parse(`
      .${ns.clearfix}:after {
        content: "";
        display: table;
        clear: both;
      }
    `).nodes
  )
}
