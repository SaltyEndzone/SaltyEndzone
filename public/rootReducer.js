import { combineReducers }                             from 'redux';
import { routerReducer as routing }                    from 'react-router-redux';
import login                                           from './Login/LoginReducers';
import { treeFunction, activeTreeFunction }            from './Tree/TreeReducers';
import { stackFunction, activeStackFunction }          from './Stack/StackReducers';
import { queueFunction, activeQueueFunction}           from './Queue/QueueReducers';
import { linkedlistFunction, activeLinkedListFunction} from './LinkedList/LinkedListReducers';
import { graphFunction, activeGraphFunction }          from './Graph/GraphReducers';
import { hashtableFunction, activeHashTableFunction}   from './HashTable/HashTableReducers';

const rootReducer = combineReducers({
  routing: routing,
  login: login,
  treeFunction: treeFunction,
  activeTreeFunction: activeTreeFunction,
  stackFunction: stackFunction,
  activeStackFunction: activeStackFunction,
  queueFunction: queueFunction,
  activeQueueFunction: activeQueueFunction,
  linkedlistFunction: linkedlistFunction,
  activeLinkedListFunction: activeLinkedListFunction,
  graphFunction: graphFunction,
  activeGraphFunction: activeGraphFunction,
  hashtableFunction: hashtableFunction,
  activeHashTableFunction: activeHashTableFunction
})

export default rootReducer