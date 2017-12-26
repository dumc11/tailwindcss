import defineClasses from '../util/defineClasses'

export default function({ typography, naming: { typography: ns } }) {
  return defineClasses({
    [ns.measure]: { 'max-width': typography.measure },
    [ns.measureWide]: { 'max-width': typography.measureWide },
    [ns.measureNarrow]: { 'max-width': typography.measureNarrow },
    [ns.indent]: {
      'text-indent': typography.indent,
      'margin-top': '0',
      'margin-bottom': '0',
    },
    [ns.smallCaps]: { 'font-variant': 'small-caps' },
  })
}
