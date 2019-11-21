import request from 'superagent'

export function getactivities(){
    return request
    .get('/v1/activities')
    .then(res => res)
}