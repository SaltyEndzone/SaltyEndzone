export function linkedlistFunction() {
  return [
    { linkedlistFunction: 'ADD TO TAIL'},
    { linkedlistFunction: 'REMOVE HEAD'},
    { linkedlistFunction: 'CONTAINS'}
  ];
}

export function activeLinkedListFunction(state = null, action) {
  switch (action.type) {
    case 'LINKEDLIST_FUNCTION_SELECTED':
    return action.payload;
  }
  return state;
}

export function addToTail(){
  switch (action.type) {
    case 'ADD_TO_TAIL':
      return
  }
}