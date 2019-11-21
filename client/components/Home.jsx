import React from 'react'
import {connect} from 'react-redux'
import {shapeData} from '../actions'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            city: '',
            activities: []
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch(shapeData(this.state))
    }
    
    handleChange = (event) => {
        if(document.getElementById(event.target.id).checked){
            this.setState({
                activities: [...this.state.activities, event.target.value] 
            })
        
        }
        if(!(document.getElementById(event.target.id).checked)){
            let newArr = this.state.activities.filter(activity => activity !== event.target.id)
            this.setState({
                activities: newArr
            })
        }
        
    }

    selectCity = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    render(){
        return (
            <>
            <h1>Welcome To Weather Or Not</h1>
            <form>
                <label>Choose your City</label>
                <select onChange={this.selectCity}>
                    <option>Select a City</option>
                    <option value="2348079">Auckland</option>
                    <option value="2351310">Wellington</option>
                    <option value="2348327">Christchurch</option>
                    <option value="580778">Bordeaux</option>
                </select> 
                <input onChange={this.handleChange} type="checkbox" id="washing" value="washing"></input>Washing
                <input onChange={this.handleChange} type="checkbox" id="mountainBiking" value="mountainBiking"></input>Mountain Biking
                <input onChange={this.handleChange} type="checkbox" name="" id="raving" value="raving"></input>Raving
                <input onChange={this.handleChange} type="checkbox" name="" id="indoorActivities" value="indoorActivities"></input>Indoor Activities
                <input onChange={this.handleChange} type="checkbox" name="" id="windSurfing" value="windSurfing"></input>Wind Surfing
                <input onChange={this.handleChange} type="checkbox" name="" id="beachDay" value="beachDay"></input>Beach Day
                <input onChange={this.handleChange} type="checkbox" name="" id="stargazing" value="stargazing"></input>Stargazing
                <button onClick={this.handleSubmit} type="submit">Submit</button>
            </form>
            </>
        )
    }
}

export default connect()(Home)