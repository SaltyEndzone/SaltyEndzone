export function queueFunction() {
  return [
    { queueFunction: 'ENQUEUE'},
    { queueFunction: 'DEQUEUE'},
    { queueFunction: 'SIZE'}
  ];
}

export function activeQueueFunction(state = null, action) {
  switch (action.type) {
    case 'QUEUE_FUNCTION_SELECTED':
      return action.payload;
  }
  return state;
}