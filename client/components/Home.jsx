import React from 'react'
import { connect } from 'react-redux'
import { shapeData } from '../actions'
import { showPage } from '../actions'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
            activities: [],
            cityName: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch(shapeData(this.state))
        this.props.dispatch(showPage('weather'))
    }

    handleChange = (event) => {
        if (document.getElementById(event.target.id).checked) {
            this.setState({
                activities: [...this.state.activities, event.target.value]
            })

        }
        if (!(document.getElementById(event.target.id).checked)) {
            let newArr = this.state.activities.filter(activity => activity !== event.target.value)
            this.setState({
                activities: newArr
            })
        }

    }

    selectCity = (event) => {

        let cities = [{
            cityName: 'Auckland',
            city: 2348079
        },
        {
            cityName: 'Wellington',
            city: 2351310
        },
        {
            cityName: 'Christchurch',
            city: 2348327
        },
        {
            cityName: 'Bordeaux',
            city: 580778
        }]

        cities.map(city => {
            if (city.city == event.target.value) {
                this.setState({
                    city: city.city,
                    cityName: city.cityName
                })
            }
        })

    }

    render() {
        return (
            <>
                <h1>Welcome To Weather Or Not</h1>
                <form>
                    <label>Choose your City</label>
                    <select onChange={this.selectCity}>
                        <option>Select a City</option>
                        <option id="Auckland" value="2348079">Auckland</option>
                        <option id="Wellington" value="2351310">Wellington</option>
                        <option id="Christchurch" value="2348327">Christchurch</option>
                        <option id="Bordeaux" value="580778">Bordeaux</option>
                    </select>
                    <input onChange={this.handleChange} type="checkbox" id="washing" value="washing"></input>Washing
                <input onChange={this.handleChange} type="checkbox" id="mountainBiking" value="mountain_biking"></input>Mountain Biking
                <input onChange={this.handleChange} type="checkbox" name="" id="raving" value="raving"></input>Raving
                <input onChange={this.handleChange} type="checkbox" name="" id="indoorActivities" value="indoor_activities"></input>Indoor Activities
                <input onChange={this.handleChange} type="checkbox" name="" id="windSurfing" value="wind_surfing"></input>Wind Surfing
                <input onChange={this.handleChange} type="checkbox" name="" id="beachDay" value="beach_day"></input>Beach Day
                <input onChange={this.handleChange} type="checkbox" name="" id="stargazing" value="stargazing"></input>Stargazing
                <button onClick={this.handleSubmit} type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default connect()(Home)