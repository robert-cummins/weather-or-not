import { combineReducers } from 'redux'
import weather from './weather'
import activities from './activities'
import day from './day'
import selectedData from './selectedData'
import showPage from './showPage'


// import errorMessage from './error-message'
export default combineReducers({
  weather,
  activities,
  selectedData,
  showPage,
  day,
})
