const fs = require('fs')
const path = require('path')
const extract = require('extract-from-css');
const _ = require('lodash')

const tachyons = fs.readFileSync(path.resolve(__dirname + '/node_modules/tachyons/css/tachyons.css'), 'utf-8')
const tailwind = fs.readFileSync(path.resolve(__dirname + '/dist/tailwind.css'), 'utf-8')

const c1 = extract.extractClasses(tachyons)
const c2 = extract.extractClasses(tailwind)

let diff = c1.reduce((acc, x) => {
  if (x[0] !== '#' && c2.indexOf(x) === -1)  {
    acc.push(x)
  }
  return acc
}, [])

console.log(diff.length)
diff.splice(0, 1000)
// console.log(_.take(diff, 20))
console.log(diff)
