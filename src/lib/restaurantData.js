const restaurants = require('./restaurants-swe.json')

const random = () => {
  return restaurants[Math.floor(Math.random() * restaurants.length)]
}

const byID = id => {
  const restaurant = restaurants
    .filter(restaurant => restaurant.id === id.toString())
  if (restaurant.length === 1) {
    return restaurant[0]
  } else {
    console.error('restaurant:', restaurant)
    throw new Error('ID did not yield exactly 1 restaurant')
  }
}

module.exports = {
  random,
  byID
}
