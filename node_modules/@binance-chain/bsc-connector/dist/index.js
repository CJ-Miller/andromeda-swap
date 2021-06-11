
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./bsc-connector.cjs.production.min.js')
} else {
  module.exports = require('./bsc-connector.cjs.development.js')
}
