const request = require('got')
const moment = require('moment')

const URL = 'http://www.bookatable.se/bookingflow/availability'

const getAvailabilityData = id => {
  const date = moment().add(1, 'd').format('YYYY-MM-DD')
  const query = `?covers=2&date=${date}&time=19:00&salesforceid=${id}&language=sv-SE`
  console.log(`GET: ${URL}${query}`)
  return request(`${URL}${query}`)
}

module.exports = getAvailabilityData
