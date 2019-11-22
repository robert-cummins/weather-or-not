import React from "react";
import { connect } from "react-redux";
import { shapeData } from "../actions";
import { showPage, fetchWeather } from "../actions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "2351310",
      activities: ["wind_surfing"],
      cityName: "Wellington"
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchWeather());
  }

  handleSubmit = event => {
    if (this.state.city == "" || this.state.activities.length <= 0) {
      alert("Please select a city and one or more activities");
    } else {
      event.preventDefault();
      this.props.dispatch(shapeData(this.state));
      this.props.dispatch(showPage("weather"));
    }
  };

  handleChange = event => {
    if (document.getElementById(event.target.id).checked) {
      this.setState({
        activities: [...this.state.activities, event.target.value]
      });
    }
    if (!document.getElementById(event.target.id).checked) {
      let newArr = this.state.activities.filter(
        activity => activity !== event.target.value
      );
      this.setState({
        activities: newArr
      });
    }
  };

  selectCity = event => {
    let cities = [
      {
        cityName: "Auckland",
        city: 2348079
      },
      {
        cityName: "Wellington",
        city: 2351310
      },
      {
        cityName: "Christchurch",
        city: 2348327
      },
      {
        cityName: "Bordeaux",
        city: 580778
      }
    ];

    cities.map(city => {
      if (city.city == event.target.value) {
        this.setState({
          city: city.city,
          cityName: city.cityName
        });
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome To Weather Or Not</h1>
        <form>
          <select onChange={this.selectCity}>
            <option>Select a City</option>
            <option id="Auckland" value="2348079">
              Auckland
            </option>
            <option id="Wellington" value="2351310">
              Wellington
            </option>
            <option id="Christchurch" value="2348327">
              Christchurch
            </option>
            <option id="Bordeaux" value="580778">
              Bordeaux
            </option>
          </select>
          <div className="m-2">
            <input
              className="mr-1"
              onChange={this.handleChange}
              type="checkbox"
              id="washing"
              value="washing"
            ></input>
            Washing
            <input
              className="ml-4 mr-1"
              onChange={this.handleChange}
              type="checkbox"
              id="mountainBiking"
              value="mountain_biking"
            ></input>
            Mountain Biking
            <input
              className="ml-4 mr-1"
              onChange={this.handleChange}
              type="checkbox"
              name=""
              id="raving"
              value="raving"
            ></input>
            Raving
            <input
              className="ml-4 mr-1"
              onChange={this.handleChange}
              type="checkbox"
              name=""
              id="indoorActivities"
              value="indoor_activities"
            ></input>
            Indoor Activities
            <input
              className="ml-4 mr-1"
              onChange={this.handleChange}
              type="checkbox"
              name=""
              id="windSurfing"
              value="wind_surfing"
            ></input>
            Wind Surfing
            <input
              className="ml-4 mr-1"
              onChange={this.handleChange}
              type="checkbox"
              name=""
              id="beachDay"
              value="beach_day"
            ></input>
            Beach Day
            <input
              className="ml-4 mr-1"
              onChange={this.handleChange}
              type="checkbox"
              name=""
              id="stargazing"
              value="stargazing"
            ></input>
            Stargazing
          </div>
          <button className="m-2" onClick={this.handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Home);
