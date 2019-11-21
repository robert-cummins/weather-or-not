import request from 'superagent'

export const GET_WEATHER = 'GET_WEATHER'

export const getWeather = (weather) => {
  return {
    type: GET_WEATHER,
    weather
  }
}

export function fetchWeather() {
  return (dispatch) => {
    return request
      .get(`/api/v1/weather`)
      .then(res => {
        console.log(res.body)
        let processedWeather = processWeather(res.body)

        dispatch(getWeather(processedWeather))
      })

  }
}

function processWeather(weatherData) {
  return weatherData.consolidated_weather.map(dayWeather => {
    return {
      date: dayWeather.applicable_date,
      weather: dayWeather.weather_state_name,
      weatherImg: "https://www.metaweather.com/static/img/weather/png/" + dayWeather.weather_state_abbr + ".png",
      temp: dayWeather.the_temp,
      windDirection: dayWeather.wind_direction_compass,
      windSpeed: dayWeather.wind_speed
    }
  })
}

export const getActivities = (activities) => {
  return {
    type: 'GET_ACTIVITIES',
    activities
  }
}

export function fetchActivities () {
  return (dispatch) => {
    return request
      .get(`/v1/activities`)
      .then(res => {
        dispatch(getActivities(processedActivities))
      })
      
  }
}
