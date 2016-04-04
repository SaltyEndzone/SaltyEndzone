export function selectQueueFunction (func) {
  return {
    type: 'QUEUE_FUNCTION_SELECTED',
    payload: func
  }
}