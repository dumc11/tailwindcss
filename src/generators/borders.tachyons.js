import defineClasses from '../util/defineClasses'

export default function({ naming: { borders: ns } }) {
  return defineClasses({
    [ns.all]: {
      'border-style': 'solid',
      'border-width': '1px',
    },
    [ns.top]: {
      'border-top-style': 'solid',
      'border-top-width': '1px',
    },
    [ns.right]: {
      'border-right-style': 'solid',
      'border-right-width': '1px',
    },
    [ns.bottom]: {
      'border-bottom-style': 'solid',
      'border-bottom-width': '1px',
    },
    [ns.left]: {
      'border-left-style': 'solid',
      'border-left-width': '1px',
    },
    [ns.none]: {
      'border-style': 'none',
      'border-width': '0',
    },
  })
}
