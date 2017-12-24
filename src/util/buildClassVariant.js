import escapeClassName from './escapeClassName'

export default function buildClassVariant(className, variantName, separator) {
  let result
  if (!process.env.LIBRARY || process.env.LIBRARY === 'tailwind') {
    result = `.${variantName}${escapeClassName(separator)}${className.slice(1)}`
  } else if (process.env.LIBRARY === 'tachyons') {
    result = `.${className.slice(1)}${escapeClassName(separator)}${variantName}`
  }
  return result
}
