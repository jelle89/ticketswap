import request from 'superagent'

export const USER_LOGIN= 'USER_LOGIN'

export const userLogIn = (login) => {
    return {
    type: USER_LOGIN,
    payload: login
}}

const baseUrl = 'http://localhost:5000'


export const login = (email, password) => dispatch => {
    console.log('test5', email)
    request
        .post(`${baseUrl}/login`)
        .send({ email, password })
        .then(res => {
            dispatch(userLogIn(res))
        })
        .catch(err => {console.log(err)})
}