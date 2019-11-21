
import React from 'react'
import { connect } from 'react-redux'
import { showPage } from '../actions'



import WeatherWeek from "./WeatherWeek";

import Home from "./Home";

class App extends React.Component {

  handleClick = (event) =>{
    event.preventDefault()
    this.props.dispatch(showPage('home'))
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick} type="button">Weather or Not</button>
        {this.props.showPage == 'home' && <Home />}
        {this.props.showPage == 'weather' &&   <><WeatherWeek /> </>}     
      

        
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    showPage: state.showPage
  }
}


export default connect(mapStateToProps)(App);
