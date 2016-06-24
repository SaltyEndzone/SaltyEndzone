import { browserHistory } from 'react-router'

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