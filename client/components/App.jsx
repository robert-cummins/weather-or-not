import React from "react";
import { connect } from "react-redux";
import { showPage } from "../actions";

import WeatherWeek from "./WeatherWeek";

import Home from "./Home";

class App extends React.Component {
  handleClick = event => {
    event.preventDefault();
    this.props.dispatch(showPage("home"));
  };

  render() {
    return (
      <>
        <div class="sun">
          <div class="ray_box">
            <div class="ray ray1"></div>
            <div class="ray ray2"></div>
            <div class="ray ray3"></div>
            <div class="ray ray4"></div>
            <div class="ray ray5"></div>
            <div class="ray ray6"></div>
            <div class="ray ray7"></div>
            <div class="ray ray8"></div>
            <div class="ray ray9"></div>
            <div class="ray ray10"></div>
          </div>
        </div>
        <div class="pos-f-t">
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <h5 class="text-white h4">Jeffery Epstein</h5>
              <span class="text-muted">
                didn't kill himself, he was murdered. Wake up.
              </span>
            </div>
          </div>
          <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#" onClick={this.handleClick}>
              <img
                src="/images/icons8-windy_weather.png"
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt=""
              />
              Weather or Not
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
        <div className="container-fluid mt-3">
          <div class="row">
            <div class="col-sm-3">
              {this.props.showPage == "home" && <Home />}
            </div>
          </div>
          {this.props.showPage == "weather" && (
            <>
              <WeatherWeek />{" "}
            </>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    showPage: state.showPage
  };
};

export default connect(mapStateToProps)(App);
