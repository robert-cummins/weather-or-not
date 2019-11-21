import React from 'react'
import { connect } from 'react-redux'
import { fetchWeather, showPage } from '../actions'

import WeatherWeek from './WeatherWeek'
import ActivityList from './ActivityList'
import Home from './Home'


class App extends React.Component {

  componentDidMount() {

    this.props.dispatch(fetchWeather())
  }
  handleClick = (event) =>{
    event.preventDefault()
    this.props.dispatch(showPage('home'))
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick} type="button">Weather or Not</button>
        {this.props.showPage == 'home' && <Home />}
        {this.props.showPage == 'weather' &&   <><WeatherWeek /> <ActivityList /></>}
        
      
        
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    showPage: state.showPage
  }
}

export default connect(mapStateToProps)(App)
