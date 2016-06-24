import { browserHistory } from 'react-router'

export const OPEN_LOGIN = 'OPEN_LOGIN';
export const CLOSE_LOGIN = 'CLOSE_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGOUT = 'USER_LOGOUT';
export const PROCESSING_LOGIN = 'PROCESSING_LOGIN';

export function openLogin() {
  return {
    type: OPEN_LOGIN
  };
}

export function closeLogin() {
  return {
    type: CLOSE_LOGIN
  };
}

export function SignUp(email, password) {
  return dispatch=> {
    return fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(response.json())
    .then((res) => {
      if (res.token) {
        return dispatch(loginSuccess())
      } else {
        return dispatch(registrationError())
      }
    })
  }
}

export function processRegistration() {
  return {
    type: PROCESSING_REGISTRATION
  }
}

export function registrationError() {
  return {
    type: USER_REGISTRATION_ERROR
  }
}
export function userLogin(email, password) {
  return dispatch => {
    dispatch(processRegistration())
    return fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(function(user) {
        if (user.status === 200) {
          user = user.json()
          return dispatch(loginSuccess(user.userId))
        } else {
          return dispatch(loginError())
        }
      })
  }
}

export function loginSuccess(payload) {
  // browserHistory.push('representatives')
  return {
    type: USER_LOGIN_SUCCESS,
    payload
  }
}

export function processingLogin() {
  return {
    type: PROCESSING_LOGIN
  }
}

export function loginError() {
  return {
    type: USER_LOGIN_ERROR,
  }
}

export function processLogout() {
  browserHistory.push('login')
  return {
    type: USER_LOGOUT
  }
}