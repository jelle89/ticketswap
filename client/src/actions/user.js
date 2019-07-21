import request from 'superagent'

export const USER_SIGNUP = 'USER_SIGNUP'
export const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL'
export const USER_GET_JWT = 'USER_GET_JWT'

export const userSignup = (login) => {
    return {
        type: USER_SIGNUP,
        payload: login
    }
}
export const userSignupFail = (error) => {
    return {
        type: USER_SIGNUP_FAIL,
        payload: error
    }
}
export const onLoadJWT = (jwt) => {
    return {
        type: USER_GET_JWT,
        payload: jwt
    }
}

const baseUrl = 'http://localhost:5000' 


export const signup = (name, email, password) => (dispatch) => {

    request
        .post(`${baseUrl}/user`)
        .send({ name, email, password })
        .then(
            res => {
                console.log('res', res.body)
                console.log("token is:", res.body.jwt)
                localStorage.setItem('token', res.body.jwt);
                
                dispatch(userSignup(res))

            },
            err => {
                console.log('res2', err)
                dispatch(userSignupFail(err))
            }
        )
}