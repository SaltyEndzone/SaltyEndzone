export function hashtableFunction() {
  return [
    { hashtableFunction: 'INSERT' },
    { hashtableFunction: 'REMOVE' },
    { hashtableFunction: 'RESIZE' },
    { hashtableFunction: 'RETRIEVE' }
  ]
}

export function  activeHashTableFunction(state = null, action) {
  switch(action.type) {
    case 'HASHTABLE_FUNCTION_SELECTED':
    return action.payload
  }
  return state
}