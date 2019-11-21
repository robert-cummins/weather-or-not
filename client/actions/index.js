import request from 'superagent'

export const GET_WEATHER = 'GET_WEATHER'

export const getWeather = (weather) => {
  return {
    type: GET_WEATHER,
    weather
  }
}

export function fetchWeather () {
  return (dispatch) => {
    return request
      .get(`/api/v1/weather`)
      .then(res => {

        let processedWeather = processWeather(res)

        dispatch(getWeather(processedWeather))
      })
      
  }
}

function processWeather(weatherData) {
  return weatherData.consolidated_weather.map(dayWeather => {
    return {
      weather: dayWeather.weather_state_name,
      weatherImg: dayWeather.weather_state_abbr,
      temp: dayWeather.the_temp

    }
  })
}
