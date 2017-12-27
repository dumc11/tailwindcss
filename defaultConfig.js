module.exports = function() {
  process.env.TAILWIND_FLAVOUR = 'tachyons'
  return require('lodash').cloneDeep(
    require(`${__dirname}/config.${process.env.TAILWIND_FLAVOUR}.js`)
  )
}
