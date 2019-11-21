import request from 'superagent'

export const GET_WEATHER = 'GET_WEATHER'
export const SET_DAY = 'SET_DAY'

export const getWeather = (weather) => {
  return {
    type: GET_WEATHER,
    weather
  }
}

export function fetchWeather(cityId) {
  return (dispatch) => {
    return request
      .get(`/api/v1/weather/` + cityId)
      .then(res => {
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

export function fetchActivities() {
  return (dispatch) => {
    return request
      .get(`/v1/activities`)
      .then(res => {
        dispatch(getActivities(res.body))
      })

  }
}

export function setDayIndex(dayIndex) {
  return (dispatch) => {
    return dispatch(setDay(dayIndex))
  }
}

export const setDay = (dayIndex) => {
  return {
    type: SET_DAY,
    dayIndex
  }
}

export const shapeData = (data) => {
  //console.log(data)
  return {
    type: 'SEND_DATA',
    data
  }
}


export const showPage = (pageName) => {
  return {
    type: 'GET_PAGE',
    pageName
  }
}

