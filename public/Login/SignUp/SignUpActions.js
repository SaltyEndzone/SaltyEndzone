export const OPEN_SIGNUP = 'OPEN_SIGNUP';
export const CLOSE_SIGNUP = 'CLOSE_SIGNUP';


export function openSignUp() {
  return {
    type: OPEN_SIGNUP
  };
}

export function closeSignUp() {
  return {
    type: CLOSE_SIGNUP
  };
}
