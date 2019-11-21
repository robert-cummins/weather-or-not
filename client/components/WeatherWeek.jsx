import React from 'react'
import { connect } from 'react-redux'

import { fetchWeather } from '../actions'

class WeatherWeek extends React.Component {


  componentDidMount() {
    this.props.dispatch(fetchWeather())
  }

  render() {
    return (
      <>
        {this.props.weather ?
          <section>
            {this.props.weather.map((day, i) => {
              return <article key={i}>
              <p>Date: {day.date}</p>
              <p>Weather: {day.weather}</p>
              <img className="icon" src={day.weatherImg}/>
              <p>Temp: {Math.floor(day.temp)}</p>
              <p>Wind: {day.windDirection}</p>
              <p>Wind speed: {Math.floor(day.windSpeed)} km/h</p>  
                <hr />
              </article>
            })}
          </section>
          : <h1>Data loading, please wait...</h1>
        }
      </>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherWeek)