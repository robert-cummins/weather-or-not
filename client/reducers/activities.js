
function activities (state = [], action) {
  switch (action.type) {
    case 'GET_ACTIVITIES':
      return action.activities

    default:
      return state
  }
}

export default activities