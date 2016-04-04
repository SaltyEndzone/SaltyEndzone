export function linkedlistFunction() {
  return [
    { linkedlistFunction: 'ADD TO TAIL'},
    { linkedlistFunction: 'CONTAINS'},
    { linkedlistFunction: 'REMOVE HEAD'}
  ]
}

export function activeLinkedListFunction(state = null, action) {
  switch(action.type) {
    case 'LINKEDLIST_FUNCTION_SELECTED':
    return action.payload
  }
  return state
}