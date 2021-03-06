const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ac02889c9d033fd38d2f94ce6cd3bb8b&query='+latitude+','+longitude+'&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + ' ! It is currently ' + body.current.temperature + '*C, but feels like ' + body.current.feelslike + '*C')
        }
    })
}

module.exports = forecast