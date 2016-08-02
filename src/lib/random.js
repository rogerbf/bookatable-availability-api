const Rx = require('rxjs')
const restaurants = require('./restaurantData.js')
const getAvailabilityData = require('./availabilityData.js')

const fetch = new Rx.Subject()

const results = fetch
  .map(() => restaurants.random())
  .concatMap(restaurant => {
    console.log('fetching availability data for id:', restaurant.id)
    return (
    Rx.Observable.fromPromise(getAvailabilityData(restaurant.id))
      .concat()
      .map(response => {
        if (response.statusCode !== 200) {
          fetch.next()
          throw new Error(`status: ${response.statusCode}`)
        } else {
          const times = JSON.parse(response.body).locations[0].times.map(t => t.time)
          return Object.assign({}, restaurant, { availability: times })
        }
      })
      .catch(e => {
        console.error('error fetching id:', restaurant.id)
        console.log('fetching new id...')
        fetch.next()
        return Rx.Observable.empty()
      })
    )
  })

function random () {
  return new Promise((resolve, reject) => {
    results.subscribe({
      next: data => resolve(data),
      error: err => reject(err)
    })
    fetch.next()
  })
}

module.exports = random
