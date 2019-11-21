const initialState = {
    city : '',
    activities : []
}


function sendData (state = initialState, action) {
    switch (action.type) {
      case 'SEND_DATA':
        return action.data
  
      default:
        return state
    }
  }
  
  export default sendData