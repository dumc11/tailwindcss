module.exports = function() {
  process.env.TAILWIND_FLAVOUR = 'tailwind'
  return require('lodash').cloneDeep(
    require(`${__dirname}/config.${process.env.TAILWIND_FLAVOUR}.js`)
  )
}
