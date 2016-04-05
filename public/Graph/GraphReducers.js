export function graphFunction() {
  return [
    { graphFunction: 'ADD NODE' },
    { graphFunction: 'REMOVE NODE' },
    { graphFunction: 'ADD EDGE' },
    { graphFunction: 'REMOVE EDGE' },
    { graphFunction: 'HAS EDGE' },
    { graphFunction: 'CONTAINS' }
  ];
}

export function activeGraphFunction(state = null, action) {
  switch (action.type) {
    case 'GRAPH_FUNCTION_SELECTED':
    return action.payload;
  }
  return state;
}