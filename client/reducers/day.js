
import { SET_DAY } from '../actions'

function day(state = 0, action) {
  switch (action.type) {
    case SET_DAY:
      return action.dayIndex
    default:
      return state
  }
}

export default day