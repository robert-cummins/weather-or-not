import React from 'react'
import { connect } from 'react-redux'
import { getWeather } from '../actions'

import WeatherWeek from './WeatherWeek'
import ActivityList from './ActivityList'
import Home from './Home'


const App = () => {
  return (
    <>
      <h1>Weather or Not</h1>
      {/* <Home /> */}
      <WeatherWeek />
      {/* <ActivityList /> */}
    </>
  )
}

export default connect()(App)
