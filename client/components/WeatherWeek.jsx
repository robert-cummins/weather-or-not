import React from "react";
import { connect } from "react-redux";

import { fetchWeather } from "../actions";

class WeatherWeek extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWeather());
  }

  render() {
    return (
      <>
        {this.props.weather ? (
          <section>
            <h5>Wellington</h5>
            {this.props.weather.map((day, i) => {
              return (
                <article key={i} id={day.date}>
                  <div className="container">
                    <ul
                      class="nav nav-pills nav-justified flex-column flex-sm-row"
                      id="myTab"
                      role="tablist"
                    >
                      <li class="nav-item">
                        <a
                          class="flex-sm-fill text-sm-center nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Home
                        </a>
                      </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        Data
                      </div>
                    </div>
                  </div>
                  <p>Date: {day.date}</p>
                  <p>Weather: {day.weather}</p>
                  <img className="icon" src={day.weatherImg} />
                  <p>Temp: {Math.floor(day.temp)}</p>
                  <p>Wind: {day.windDirection}</p>
                  <p>Wind speed: {Math.floor(day.windSpeed)} km/h</p>
                  <hr />
                </article>
              );
            })}
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
    weather: state.weather
  };
};

export default connect(mapStateToProps)(WeatherWeek);
