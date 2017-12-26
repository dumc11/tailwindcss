import defineClasses from '../util/defineClasses'

export default function({ naming: { visibility: ns } }) {
  return defineClasses({
    [ns.visible]: { visibility: 'visible' },
    [ns.invisible]: { visibility: 'hidden' },
    [ns.clip]: {
      position: 'fixed !important',
      clip: 'rect( 1px, 1px, 1px, 1px )',
    },
  })
}
