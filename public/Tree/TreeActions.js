export const TREE_FUNCTION_SELECTED = 'OPEN_LOGIN'

export function selectTreeFunction (func) {
  return {
    type: TREE_FUNCTION_SELECTED,
    payload: func
  }
}