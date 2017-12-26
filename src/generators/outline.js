import defineClasses from '../util/defineClasses'

export default function({ naming: { outline: ns } }) {
  return defineClasses({
    [ns.base]: {
      outline: '1px solid'
    },
    [ns.transparent]: {
      outline: '1px solid transparent'
    },
    [ns.zero]: {
      outline: '0',
    },
  })
}
