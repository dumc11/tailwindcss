module.exports = function(library) {
  if (!library) {
    library = 'tailwind'
  }
  return require('lodash').cloneDeep(require(`${__dirname}/config.${library}.js`))
}
