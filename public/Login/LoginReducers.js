import { OPEN_LOGIN, CLOSE_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, USER_LOGOUT, PROCESSING_LOGIN, PROCESSING_REGISTRATION, } from './LoginActions';

export default function login(state = {
  login: false,
  isLoggedIn: null,
  loginError: false,
  processingLogin: false,
  registrationError: false
}, action) {
  switch (action.type) {
    case OPEN_LOGIN:
    console.log(state);
      return Object.assign({}, state, {
        login: true
      });
    case CLOSE_LOGIN:
      return Object.assign({}, state, {
        login: false,
      });
      case PROCESSING_LOGIN:
      return Object.assign({}, state, {
        processingLogin: true
      })
      case USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: action.payload,
        processingLogin: false,
        loginError: false,
        registrationError: false
      })
      case USER_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: true,
        processingLogin: false
      })
    case USER_LOGOUT:
      return Object.assign({}, state, {
        isLoggedIn: false
      })
    default:
      return state;
  }
}