export function selectGraphFunction (func) {
  return {
    type: 'GRAPH_FUNCTION_SELECTED',
    payload: func
  };
}