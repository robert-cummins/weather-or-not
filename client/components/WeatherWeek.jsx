import React from 'react'
import { connect } from 'react-redux'

import { setDayIndex } from '../actions'

class WeatherWeek extends React.Component {






  render() {
    return (
      <>
        {this.props.weather ?
          <section>
            <h5>Wellington</h5>
            {this.props.weather.map((day, i) => {
              return <article key={i}>
                <p>Date: {day.date}</p>
                <p>Weather: {day.weather}</p>
                <img className="icon" src={day.weatherImg} />
                <p>Temp: {Math.floor(day.temp)}</p>
                <p>Wind: {day.windDirection}</p>
                <p>Wind speed: {Math.floor(day.windSpeed)} km/h</p>
                <button onClick={() => this.props.dispatch(setDayIndex(i))}>Show Activities</button>
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