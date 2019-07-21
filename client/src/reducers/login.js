import { USER_LOGIN } from '../actions/login'

export default function login(state = {}, action = {}) {
  
  switch (action.type) {
    case USER_LOGIN:
      localStorage.setItem('token', action.payload.body.jwt);
      return action.payload.body
    default:
      return state
  }
}