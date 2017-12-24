import defineClasses from '../util/defineClasses'

export default function({ naming: { boxSizing: ns } }) {
  return defineClasses({
    [ns.borderBox]: { 'box-sizing': 'border-box' },
    [ns.contentBox]: { 'box-sizing': 'content-box' },
  })
}
