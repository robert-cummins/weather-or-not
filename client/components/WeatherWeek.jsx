import React from "react";
import { connect } from "react-redux";

import ActivityList from "./ActivityList";

import { fetchWeather, setDayIndex } from "../actions";

class WeatherWeek extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWeather(this.props.selectedData.city));
  }

  render() {
    return (
      <>
        {this.props.weather ? (
          <section>
            <h3 className="mb-3">{this.props.selectedData.cityName}</h3>
            <p className="text-muted">Can't beat it on a good day.</p>
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
                        <img className="weather-icon" src={day.weatherImg} />
                        <p className="text-muted">{day.weather}</p>
                        <hr />
                        <p className="text-muted">{day.date}</p>
                        <p className="text-muted">
                          <img
                            src="/images/icons8-temperature.png"
                            width="24"
                            height="24"
                            class="d-inline-block"
                            alt=""
                          />
                          {Math.floor(day.temp)}°C
                        </p>
                        <p className="text-muted">
                          <img
                            src="/images/icons8-windsock.png"
                            width="24"
                            height="24"
                            class="d-inline-block"
                            alt=""
                          />
                          Wind: {day.windDirection}
                        </p>
                        <p className="text-muted">
                          <img
                            src="/images/icons8-air_element.png"
                            width="24"
                            height="24"
                            class="d-inline-block"
                            alt=""
                          />
                          Speed:
                          <br />
                          {Math.floor(day.windSpeed)} km/h
                        </p>
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
