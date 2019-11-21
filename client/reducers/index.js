import {combineReducers} from 'redux'
import weather from './weather'
import activities from './activities'


// import errorMessage from './error-message'
export default combineReducers({
  weather,
  activities,

})