export function graphFunction() {
  return [
    { graphFunction: 'ADD EDGE' },
    { graphFunction: 'ADD NODE' },
    { graphFunction: 'CONTAINS' },
    { graphFunction: 'HAS EDGE' },
    { graphFunction: 'REMOVE EDGE' },
    { graphFunction: 'REMOVE NODE' }
  ]
}

export function activeGraphFunction(state = null, action) {
  switch(action.type) {
    case 'GRAPH_FUNCTION_SELECTED':
    return action.payload
  }
  return state
}