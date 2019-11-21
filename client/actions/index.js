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
        dispatch(getWeather(res.body))
      })
      
  }
}
