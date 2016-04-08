export function selectTreeFunction (func) {
  return {
    type: 'TREE_FUNCTION_SELECTED',
    payload: func
  };
}

export function addNode (func) {
  return {
    type: 'ADD_NODE',
    payload: func
  };
}