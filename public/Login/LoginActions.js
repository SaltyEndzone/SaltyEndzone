export const OPEN_LOGIN = 'OPEN_LOGIN';
export const CLOSE_LOGIN = 'CLOSE_LOGIN';

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
