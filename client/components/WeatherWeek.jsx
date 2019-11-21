import React from "react";
import { connect } from "react-redux";

class WeatherWeek extends React.Component {
  render() {
    return (
      <>
        {this.props.weather ? (
          <section>
            <h5>Wellington</h5>
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
                        >
                          {day.date}
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
                        <p>Date: {day.date}</p>
                        <p>Weather: {day.weather}</p>
                        {/* <img className="icon" src={day.weatherImg} /> */}
                        <p>Temp: {Math.floor(day.temp)}</p>
                        <p>Wind: {day.windDirection}</p>
                        <p>Wind speed: {Math.floor(day.windSpeed)} km/h</p>
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
    weather: state.weather
  };
};

export default connect(mapStateToProps)(WeatherWeek);
