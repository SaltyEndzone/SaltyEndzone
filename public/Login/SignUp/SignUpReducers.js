import {  OPEN_SIGNUP, CLOSE_SIGNUP } from './SignUpActions';


export default function signUp(state = {signUp: false}, action) {
  switch (action.type) {
    case OPEN_SIGNUP:
      return Object.assign({}, state, {
        signUp: true
      });
    case CLOSE_SIGNUP:
      return Object.assign({}, state, {
        signUp: false,
      });
    default:
      return state;
  }
}