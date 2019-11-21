import { combineReducers } from 'redux'
import weather from './weather'
import activities from './activities'
import day from './day'
import selectedData from './selectedData'


// import errorMessage from './error-message'
export default combineReducers({
  weather,
  activities,
  day,
  selectedData

})