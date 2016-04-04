export function selectHashTableFunction (func) {
  return {
    type: 'HASHTABLE_FUNCTION_SELECTED',
    payload: func
  }
}