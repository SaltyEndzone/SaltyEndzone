
export function selectTreeFunction (func) {
  return {
    type: 'TREE_FUNCTION_SELECTED',
    payload: func
  };
}


export function addRoot () {
  return  {
    type: 'ADD_ROOT'
  }
}

// export function selectNode (id) {
//   return {
//     type: 'SELECT_NODE',
//     id: id,
//     selected: true;
//   }
// }

// const id = 0;
// export function addChild () {
//   return {
//     type: 'ADD_CHILD',
//     id: id,
//     children: []
    
//   };
// }

