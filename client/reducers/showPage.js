function showPage (state = 'home', action){
    console.log(action)
    switch(action.type){
        case 'GET_PAGE':
            return action.pageName
        default:
            return state
    }
}

export default showPage