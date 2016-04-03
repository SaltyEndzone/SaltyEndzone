export function stackFunction() {
  return [
    { stackFunction: 'PUSH'},
    { stackFunction: 'POP'},
    { stackFunction: 'SIZE'}
  ]
}

export function activeStackFunction(state = null, action) {
  switch(action.type) {
    case 'STACK_FUNCTION_SELECTED':
      return action.payload
  }
  return state
}