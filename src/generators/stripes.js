import postcss from 'postcss'
import _ from 'lodash'

export default function({ stripes, naming: { stripes: ns } }) {
  let classes = postcss.parse(`
    .${ns.base}${ns.light}:nth-child(odd) {
      background-color:hsla(0,0%,100%,.1)
    }
    .${ns.base}${ns.dark}:nth-child(odd) {
      background-color:hsla(0,0%,0%,.1)
    }
  `).nodes

  classes = classes.concat(
    _.flatMap(stripes, (color, modifier) => {
      return postcss.parse(`
      .${ns.withModifier}${ns.modifierPrefix}${modifier}:nth-child(odd) {
        background-color: ${color};
      }
    `).nodes[0]
    })
  )

  return classes
}
