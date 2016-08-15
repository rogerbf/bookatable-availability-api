#!/usr/bin/env node

const availability = require('../index.js')

availability.random()
  .then(restaurant => console.log(JSON.stringify(restaurant, null, 2)))
  .catch(e => console.log('promise error:', e))
  .then(() => process.exit())
