import React from 'react'
import { connect } from 'react-redux'

import { fetchActivities } from '../actions'

class ActivityList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchActivities())
  }

  render() {
    return (
      <>
        {this.props.weather.length > 0 ?
          <section>
            <h5>Activities</h5>
            {
              this.props.activities.map((activity, i) => {
                let daysWeather = this.props.weather[this.props.day].weather.toLowerCase().replace(" ", "_")

                let activityName = activity.activity_name.charAt(0).toUpperCase() + activity.activity_name.slice(1).replace("_", " ")

                if (this.props.selectedData.activities.includes(activity.activity_name)) {

                  if (activity[daysWeather] == 1) {
                    return <h3 key={"activity" + i}>{activityName}: Yeah Mate 😄 </h3>
                  }
                  else {
                    return <h3 key={"activity" + i}>{activityName}: Not Today 😔 </h3>
                  }
                }
              }
              )

            }
          </section>
          : <h1>Data loading, please wait...</h1>
        }
      </>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    activities: state.activities,
    weather: state.weather,
    day: state.day,
    selectedData: state.selectedData
  }
}

export default connect(mapStateToProps)(ActivityList)