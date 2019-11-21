import React from 'react'
import { connect } from 'react-redux'
import { getWeather } from '../actions'

import WeatherWeek from './WeatherWeek'
import ActivityList from './ActivityList'


const App = () => {
  return (
    <>
      <h1>Weather or Not</h1>
      <WeatherWeek />
      <ActivityList />
    </>
  )
}

export default connect()(App)
