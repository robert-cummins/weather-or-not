import React from "react";
import { connect } from "react-redux";

import ActivityList from "./ActivityList";

import { fetchWeather, setDayIndex } from '../actions'

class WeatherWeek extends React.Component {


  componentDidMount() {
    this.props.dispatch(fetchWeather(this.props.selectedData.city));
  }


  render() {


    return (
      <>
        {this.props.weather ? (
          <section>
            <h5>{this.props.selectedData.cityName}</h5>
            <div className="container">
              <ul
                className="nav nav-pills nav-justified"
                id="myTab"
                role="tablist"
              >
                {this.props.weather.map((day, i) => {
                  return (
                    <>
                      <li className="nav-item" key={i} id={day.date}>
                        <a
                          className="flex-sm-fill text-sm-center nav-link"
                          id={`home-${i}-tab`}
                          data-toggle="tab"
                          href={`#home-${i}`}
                          role="tab"
                          aria-controls={`home-${i}`}
                          aria-selected="true"
                          onClick={() => this.props.dispatch(setDayIndex(i))}
                        >
                          <p>Date: {day.date}</p>
                          <p>Weather: {day.weather}</p>
                          {/* <img className="icon" src={day.weatherImg} /> */}
                          <p>Temp: {Math.floor(day.temp)}</p>
                          <p>Wind: {day.windDirection}</p>
                          <p>Wind speed: {Math.floor(day.windSpeed)} km/h</p>
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
              <div className="tab-content" id="myTabContent">
                {this.props.weather.map((day, i) => {
                  return (
                    <>
                      <div
                        key={i}
                        id={day.date}
                        className="tab-pane fade"
                        id={`home-${i}`}
                        role="tabpanel"
                        aria-labelledby={`home-${i}-tab`}
                      >
                        <ActivityList />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

          </section>
        ) : (
            <h1>Data loading, please wait...</h1>
          )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather,
    selectedData: state.selectedData
  };
};

export default connect(mapStateToProps)(WeatherWeek);
