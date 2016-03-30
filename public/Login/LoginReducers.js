import { OPEN_LOGIN, CLOSE_LOGIN } from './LoginActions'

export default function login(state = {
  login: false
}, action) {
  switch (action.type) {
    case OPEN_LOGIN:
      return Object.assign({}, state, {
        login: true
      })
    case CLOSE_LOGIN:
      return Object.assign({}, state, {
        login: false,
      })
    default:
      return state
  }
}