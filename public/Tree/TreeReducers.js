export function treeFunction() {
  return [
    { treeFunction: 'ADD CHILD'},
    { treeFunction: 'CONTAINS'}
  ]
}

export function activeTreeFunction(state = null, action) {
  switch(action.type) {
    case 'TREE_FUNCTION_SELECTED':
      return action.payload
  }
  return state
}