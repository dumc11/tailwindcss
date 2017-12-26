import escapeClassName from './escapeClassName'

export default function buildClassVariant(className, variantName, separator, last) {
  let result
  if (!process.env.TAILWIND_FLAVOUR || process.env.TAILWIND_FLAVOUR === 'tailwind') {
    result = `.${variantName}${escapeClassName(separator)}${className.slice(1)}`
  } else if (process.env.TAILWIND_FLAVOUR === 'tachyons') {
    if (!last) {
      result = `.${variantName}${escapeClassName(separator)}${className.slice(1)}`
    } else {
      result = `.${className.slice(1)}${escapeClassName(separator)}${variantName}`
    }
    if (result.indexOf(':hover') !== -1) {
      result = result.replace(':hover', '')
      result += ':hover'
    } else if (result.indexOf(':focus') !== -1) {
      result = result.replace(':focus', '')
      result += ':focus'
    }
  }
  return result
}
