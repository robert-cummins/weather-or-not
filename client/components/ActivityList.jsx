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
        {this.props.activities ?
          <section>
            <h5>Activities</h5>
            {this.props.activities.map((activity, i) => {
              return <article key={i}>
                <p>{activity.activity_name}</p>
                <hr />
              </article>
            })}
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
    weather: state.weather
  }
}

export default connect(mapStateToProps)(ActivityList)