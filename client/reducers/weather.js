
import {GET_WEATHER} from '../actions'

function weather (state = [], action) {
  switch (action.type) {
    case GET_WEATHER:
      return action.weather
    default:
      return state
  }
}

export default weather