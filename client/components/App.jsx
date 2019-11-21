import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";

import WeatherWeek from "./WeatherWeek";
import ActivityList from "./ActivityList";
import Home from "./Home";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWeather());
  }

  render() {
    return (
      <>
        <h1>Weather or Not</h1>
        <Home />
        <WeatherWeek />
        <ActivityList />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  };
};

export default connect(mapStateToProps)(App);
