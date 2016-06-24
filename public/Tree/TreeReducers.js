const initialState = {
  '0': {
    shown: false,
    selected: false,
    children: [1, 2]
  },
  '1': {
    shown: false,
    selected: false,
    children: [3, 4]
  },
  '2': {
    shown: false,
    selected: false,
    children: [5, 6]
  },
  '3': {
    shown: false,
    selected: false,
    children: [7, 8]
  },
  '4': {
    shown: false,
    selected: false,
    children: [9, 10]
  },
  '5': {
    shown: false,
    selected: false,
    children: [11, 12]
  },
  '6': {
    shown: false,
    selected: false,
    children: [13, 14]
  },
  '7': {
    shown: false,
    selected: false,
    children: []
  },
  '8': {
    shown: false,
    selected: false,
    children: []
  },
  '9': {
    shown: false,
    selected: false,
    children: []
  },
  '10': {
    shown: false,
    selected: false,
    children: []
  },
  '11': {
    shown: false,
    selected: false,
    children: []
  },
  '12': {
    shown: false,
    selected: false,
    children: []
  },
  '13': {
    shown: false,
    selected: false,
    children: []
  },
  '14': {
    shown: false,
    selected: false,
    children: []
  },
  '15': {
    shown: false,
    selected: false,
    children: []
  }
}

export function treeFunction() {
  return [
    { treeFunction: 'ADD CHILD'},
    { treeFunction: 'CONTAINS'}
  ];
}

export function activeTreeFunction(state = null, action) {
  switch (action.type) {
    case 'TREE_FUNCTION_SELECTED':
      return action.payload;
  }
  return state;
}

// export function treeLayout () {
//   return {
//     '1': children: []
//   }
// }

export function addRoot( state = { root: false }, node, action) {
  switch (action.type) {
    case 'ADD_ROOT':
      return {
        root: true
      };
  }
}

// export function renderNodes(state = initialState, action) {
//   switch (action.type) {
//     case 'SELECT_NODE':
//       return  {
//         id: id,
//         selected: true;
//       };
//     case 'ADD_CHILD':
//       return state.map(node => {
//         if(node.id !== action.id)
//       }[{
//         id: action.id++,
//         children: [],
//         selected: false
//       },
//       ...state]
//   }
//   return state;
// }

