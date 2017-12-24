module.exports = function(library) {
  return require('lodash').cloneDeep(require(`${__dirname}/config.${library}.js`))
}
