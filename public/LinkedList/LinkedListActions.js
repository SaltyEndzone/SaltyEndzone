export function selectLinkedListFunction (func) {
  return {
    type: 'LINKEDLIST_FUNCTION_SELECTED',
    payload: func
  };
}

export function linkedListAddTail () {
  return {
    type: 'ADD_TO_TAIL'
  }
}