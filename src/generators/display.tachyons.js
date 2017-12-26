import defineClasses from '../util/defineClasses'

export default function({ naming: { display: ns } }) {
  return defineClasses({
    [ns.block]: {
      display: 'block',
    },
    [ns.inlineBlock]: {
      display: 'inline-block',
    },
    [ns.inline]: {
      display: 'inline',
    },
    [ns.inlineTable]: {
      display: 'inline-table',
    },
    [ns.table]: {
      display: 'table',
    },
    [ns.tableRow]: {
      display: 'table-row',
    },
    [ns.tableCell]: {
      display: 'table-cell',
    },
    [ns.hidden]: {
      display: 'none',
    },
    [ns.tableRowGroup]: {
      display: 'table-row-group',
    },
    [ns.tableColumn]: {
      display: 'table-column',
    },
    [ns.tableColumnGroup]: {
      display: 'table-column-group',
    },
    [ns.tableFixed]: {
      'table-layout': 'fixed',
      width: '100%',
    },
    [ns.collapse]: {
      'border-collapse': 'collapse',
      'border-spacing': '0'
    }
  })
}
